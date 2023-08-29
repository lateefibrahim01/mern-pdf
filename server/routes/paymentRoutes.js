// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Create a new payment
router.post('/create', paymentController.createPayment);

// Execute payment after successful transaction
router.get('/execute', paymentController.executePayment);

module.exports = router;
