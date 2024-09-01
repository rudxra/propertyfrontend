// pages/api/payment.js
import { generateOrderId } from '../../lib/generateOrderId';
import { setupCashfree } from '../../lib/cashfreeSetup';
import { Cashfree } from 'cashfree-pg';

setupCashfree();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await handleGet(req, res);
  } else if (req.method === 'POST') {
    await handlePost(req, res);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function handleGet(req, res) {
  try {
    const { orderAmount } = req.query;

    const request = {
      order_amount: parseFloat(orderAmount),
      order_currency: 'INR',
      order_id: generateOrderId(),
      customer_details: {
        customer_id: 'webcodder01',
        customer_phone: '9999999999',
        customer_name: 'Web Codder',
        customer_email: 'webcodder@example.com',
      },
    };

    Cashfree.PGCreateOrder("2023-08-01", request)
      .then((response) => {
        console.log(response.data);
        res.json(response.data);
      })
      .catch((error) => {
        console.error(error.response.data.message);
        res.status(500).json({ message: error.response.data.message });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function handlePost(req, res) {
  try {
    const { orderId } = req.body;

    Cashfree.PGOrderFetchPayments("2023-08-01", orderId)
      .then((response) => {
        res.json(response.data);
      })
      .catch((error) => {
        console.error(error.response.data.message);
        res.status(500).json({ message: error.response.data.message });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}
