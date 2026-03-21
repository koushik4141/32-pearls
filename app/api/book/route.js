import dbConnect from '@/lib/db';
import Appointment from '@/models/Appointment';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    
    // Validate inputs
    const { name, phone, service, date, time, type } = body;
    
    if (!name || !phone || !service || !date || !time) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const appointment = await Appointment.create({
      name,
      phone,
      service,
      date,
      time,
      type: type || 'Clinic',
      status: 'Pending'
    });

    return NextResponse.json({ 
        success: true, 
        message: 'Lead received successfully', 
        data: appointment 
    }, { status: 201 });

  } catch (error) {
    console.error('Booking API Error:', error);
    return NextResponse.json({ 
        success: false, 
        message: 'Internal server error', 
        error: error.message 
    }, { status: 500 });
  }
}
