const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'],
    trim: true 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true 
  },
  phone: { 
    type: String, 
    required: [true, 'Phone number is required'],
    trim: true 
  },
  addons: {
    yacht: { type: Boolean, default: false },
    helicopter: { type: Boolean, default: false },
    curatedDining: { type: Boolean, default: false }
  },
  totalCost: { 
    type: Number, 
    required: true,
    default: 0 
  },
  status: {
    type: String,
    enum: ['Pending', 'Contacted', 'Confirmed', 'Cancelled'],
    default: 'Pending'
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Booking', bookingSchema);