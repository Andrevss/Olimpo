const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
console.log("Token carregado:", process.env.MP_ACCESS_TOKEN);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const accessToken = process.env.MP_ACCESS_TOKEN;

app.post('/api/payment', async (req, res) => {
  const items = req.body;

  const payload = {
    items: items.map(item => ({
      id: item.id.toString(),
      title: item.title,
      quantity: item.quantity,
      unit_price: item.unitPrice,
      currency_id: "BRL"
    })),
<<<<<<< HEAD
=======
    
>>>>>>> 5ada6e1956a7bfdb6325ab16f2c605783cd72be7
  };

  console.log("Payload final:", JSON.stringify(payload, null, 2));

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
      console.error("Erro ao criar preferência:", data);
      return res.status(500).json({ error: "Erro ao criar preferência", details: data });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error("Erro no servidor:", err);
    return res.status(500).json({ error: 'Erro ao criar pagamento', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
