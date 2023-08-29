// models/Payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  payerEmail: {
    type: String,
    required: true,
  },
  paymentID: {
    type: String,
    required: true,
  },
  paymentAmount: {
    type: Number,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['created', 'approved', 'completed'],
    default: 'created',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
