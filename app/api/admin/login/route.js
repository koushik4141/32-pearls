import dbConnect from '@/lib/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret123';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ success: false, message: 'Email and password are required' }, { status: 400 });
    }

    // Hardcoded initial credentials - checked PRIOR to DB connection for resilience
    const initialAdmins = [
        { email: 'admin@32pearls.com', pass: 'admin123', name: 'Master Admin' },
        { email: 'reshma@32pearls.com', pass: 'reshma123', name: 'Dr. Reshma' },
        { email: 'suhail@32pearls.com', pass: 'suhail123', name: 'Dr. Suhail' },
        { email: 'akhil@32pearls.com', pass: 'akhil123', name: 'Dr. Akhil' },
        { email: 'vikas@32pearls.com', pass: 'vikas123', name: 'Dr. Vikas' },
        { email: 'shraddha@32pearls.com', pass: 'shraddha123', name: 'Dr. Shraddha' },
    ];

    const admin = initialAdmins.find(acc => acc.email === email && acc.pass === password);

    if (admin) {
        const token = jwt.sign({ id: 'init', email: admin.email, name: admin.name }, JWT_SECRET, { expiresIn: '12h' });
        return NextResponse.json({ success: true, token, name: admin.name });
    }

    // Attempt DB connection only for extra users
    try {
        await dbConnect();
        const dbUser = await User.findOne({ email });
        if (dbUser && await dbUser.comparePassword(password)) {
            const token = jwt.sign({ id: dbUser._id, email: dbUser.email, name: dbUser.name }, JWT_SECRET, { expiresIn: '12h' });
            return NextResponse.json({ success: true, token, name: dbUser.name });
        }
    } catch (dbErr) {
        console.warn('Database fallback failed during login:', dbErr.message);
        // We continue to the 'invalid' response below
    }

    return NextResponse.json({ success: false, message: 'Invalid protocol credentials' }, { status: 401 });

  } catch (error) {
    console.error('Login API Error:', error);
    return NextResponse.json({ 
        success: false, 
        message: 'Internal server error', 
        error: error.message 
    }, { status: 500 });
  }
}
