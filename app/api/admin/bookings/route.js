import dbConnect from '@/lib/db';
import Appointment from '@/models/Appointment';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret123';

const verifyAuth = (req) => {
  const authHeader = req.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  const token = authHeader.split(' ')[1];
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (e) {
    return null;
  }
};

// Get all bookings
export async function GET(req) {
  try {
    const user = verifyAuth(req);
    if (!user) return NextResponse.json({ success: false, message: 'Unauthorized access' }, { status: 401 });

    try {
        await dbConnect();
        const appointments = await Appointment.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, count: appointments.length, data: appointments });
    } catch (dbErr) {
        console.warn('Registry sync failed, utilizing fallback protocol:', dbErr.message);
        return NextResponse.json({ success: true, count: 0, data: [], offline: true });
    }
  } catch (error) {
    console.error('Critical Admin Protocol Error:', error);
    return NextResponse.json({ success: false, message: 'System Execution Error' }, { status: 500 });
  }
}

// Update status
export async function PATCH(req) {
  try {
    const user = verifyAuth(req);
    if (!user) return NextResponse.json({ success: false, message: 'Unauthorized access' }, { status: 401 });

    await dbConnect();
    const { id, status } = await req.json();

    if (!id || !status) {
      return NextResponse.json({ success: false, message: 'ID and Status required' }, { status: 400 });
    }

    const updated = await Appointment.findByIdAndUpdate(id, { status }, { new: true });

    if (!updated) {
      return NextResponse.json({ success: false, message: 'Appointment not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Status updated', data: updated });
  } catch (error) {
    console.error('Admin API PATCH Error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

// Global deletion
export async function DELETE(req) {
  try {
    const user = verifyAuth(req);
    if (!user) return NextResponse.json({ success: false, message: 'Unauthorized access' }, { status: 401 });

    await dbConnect();
    const { id } = await req.json();

    if (!id) {
       return NextResponse.json({ success: false, message: 'ID required' }, { status: 400 });
    }

    const deleted = await Appointment.findByIdAndDelete(id);

    if (!deleted) {
       return NextResponse.json({ success: false, message: 'Appointment not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Lead deleted permanently' });

  } catch (error) {
    console.error('Admin API DELETE Error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

// Manual Lead Creation
export async function POST(req) {
  try {
    const user = verifyAuth(req);
    if (!user) return NextResponse.json({ success: false, message: 'Unauthorized access' }, { status: 401 });

    await dbConnect();
    const body = await req.json();
    const { name, phone, service, date, time, type } = body;

    const appointment = await Appointment.create({
      name,
      phone,
      service,
      date,
      time,
      type: type || 'Clinic',
      status: 'Pending'
    });

    return NextResponse.json({ success: true, data: appointment });
  } catch (error) {
    console.error('Admin API POST Error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
