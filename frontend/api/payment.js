export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const accessToken = 'SEU_ACCESS_TOKEN_MERCADO_PAGO';

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
      success: "https://seusite.com/sucesso",
      failure: "https://seusite.com/falha",
      pending: "https://seusite.com/pendente"
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
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao criar pagamento', details: err.message });
  }
}
