import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';


const router = express.Router();
dotenv.config();

const accessToken = process.env.MP_ACCESS_TOKEN;

router.post('/', async (req, res) => {
  const items = req.body;

  const payload = {
    items: items.map(item => ({
      id: item.id.toString(),
      title: item.title,
      quantity: item.quantity,
      unit_price: item.unitPrice,
      currency_id: "BRL"
    })),
    back_urls: {
      success: "http://localhost:3000/sucesso",
      failure: "http://localhost:3000/falha",
      pending: "http://localhost:3000/pendente"
    },
    auto_return: "approved"
  };

  try {
  const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Erro Mercado Pago:", {
      status: response.status,
      body: data
    });
    return res.status(500).json({ error: "Erro ao criar preferência", details: data });
  }

  return res.status(200).json(data);
} catch (err) {
  console.error("Erro no servidor:", err);
  return res.status(500).json({ error: 'Erro ao criar pagamento', details: err.message });
}

});

export default router;
