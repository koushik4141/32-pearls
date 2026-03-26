import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide a phone number.'],
    maxlength: [20, 'Phone number cannot be more than 20 characters'],
  },
  service: {
    type: String,
    required: [true, 'Please provide a service name.'],
  },
  date: {
    type: String,
    required: [true, 'Please provide a date.'],
  },
  time: {
    type: String,
    required: [true, 'Please provide a time.'],
  },
  type: {
    type: String,
    enum: ['Clinic', 'Home'],
    default: 'Clinic',
  },
  status: {
    type: String,
    enum: ['Pending', 'Contacted', 'Completed', 'Trash'],
    default: 'Pending',
  },
  location: {
    lat: Number,
    lng: Number,
    address: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);
