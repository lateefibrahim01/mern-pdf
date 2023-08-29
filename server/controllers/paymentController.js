// controllers/paymentController.js
const paypal = require('../config/paypal');
const Payment = require('../models/Payment');

const createPayment = (req, res) => {
  const price = 10; // Set the price for your PDF file in dollars

  const create_payment_json = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal',
    },
    redirect_urls: {
      return_url: 'http://localhost:3000/success', // Replace with your frontend success page URL
      cancel_url: 'http://localhost:3000/cancel', // Replace with your frontend cancel page URL
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: 'PDF File', // Replace with your PDF file name
              sku: 'pdf123', // Replace with a unique identifier for your PDF file
              price: price.toString(),
              currency: 'USD',
              quantity: 1,
            },
          ],
        },
        amount: {
          currency: 'USD',
          total: price.toString(),
        },
        description: 'PDF file purchase', // Replace with a description for your PDF file
      },
    ],
  };

  paypal.payment.create(create_payment_json, (error, payment) => {
    if (error) {
      console.error('Error creating PayPal payment:', error);
      res.status(500).json({ error: 'Error creating PayPal payment' });
    } else {
      const newPayment = new Payment({
        payerEmail: payment.payer.payer_info.email,
        paymentID: payment.id,
        paymentAmount: price,
        paymentStatus: 'created',
      });

      newPayment.save((err) => {
        if (err) {
          console.error('Error saving payment data:', err);
          res.status(500).json({ error: 'Error saving payment data' });
        } else {
          for (const link of payment.links) {
            if (link.rel === 'approval_url') {
              res.json({ approval_url: link.href });
              break;
            }
          }
        }
      });
    }
  });
};

const executePayment = (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  Payment.findOneAndUpdate(
    { paymentID: paymentId, paymentStatus: 'created' },
    { paymentStatus: 'approved' },
    (err, payment) => {
      if (err) {
        console.error('Error updating payment status:', err);
        res.status(500).json({ error: 'Error updating payment status' });
      } else {
        const execute_payment_json = {
          payer_id: payerId,
        };

        paypal.payment.execute(paymentId, execute_payment_json, (error) => {
          if (error) {
            console.error('Error executing PayPal payment:', error);
            res.status(500).json({ error: 'Error executing PayPal payment' });
          } else {
            res.redirect('http://localhost:3000/success'); // Replace with your frontend success page URL
          }
        });
      }
    }
  );
};

module.exports = { createPayment, executePayment };
