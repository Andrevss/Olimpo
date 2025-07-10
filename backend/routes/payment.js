import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

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
        Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar pagamento", details: error.message });
  }
});

export default router;
