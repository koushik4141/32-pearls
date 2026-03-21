const mongoose = require('mongoose');
const fs = require('fs');

async function test() {
  try {
    const content = fs.readFileSync('.env.local', 'utf8');
    const MONGODB_URI = content.split('MONGODB_URI=')[1].split('\n')[0].trim();

    console.log('Using URI:', MONGODB_URI.substring(0, 30) + '...');
    console.log('Attempting connection...');

    await mongoose.connect(MONGODB_URI, {
        serverSelectionTimeoutMS: 5000,
    });

    console.log('✅ DATABASE CONNECTED SUCCESSFULLY!');
    process.exit(0);
  } catch (err) {
    console.error('❌ CONNECTION ERROR:', err.message);
    if (err.message.includes('ECONNREFUSED')) {
        console.log('Tip: Try replacing "mongodb+srv" with "mongodb" and removing the +srv specific options if DNS is restricted.');
    }
    process.exit(1);
  }
}

test();
