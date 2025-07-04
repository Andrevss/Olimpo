using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Net.Http.Headers;
using backend.Models;

[Route("api/[controller]")]
[ApiController]
public class PaymentController : ControllerBase
{
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly string _accessToken = "SEU_ACCESS_TOKEN_DO_MERCADO_PAGO"; // Coloque sua chave aqui

    public PaymentController(IHttpClientFactory httpClientFactory)
    {
        _httpClientFactory = httpClientFactory;
    }

    [HttpPost]
    public async Task<IActionResult> CreatePayment([FromBody] List<OrderItem> items)
    {
        var payload = new
        {
            items = items.Select(item => new
            {
                id = item.Id.ToString(),
                title = item.Title,
                quantity = item.Quantity,
                unit_price = item.UnitPrice,
                currency_id = "BRL"
            }),
            back_urls = new
            {
                success = "https://seusite.com/sucesso",
                failure = "https://seusite.com/falha",
                pending = "https://seusite.com/pendente"
            },
            auto_return = "approved"
        };

        var client = _httpClientFactory.CreateClient();
        client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _accessToken);

        var content = new StringContent(JsonSerializer.Serialize(payload), System.Text.Encoding.UTF8, "application/json");
        var response = await client.PostAsync("https://api.mercadopago.com/checkout/preferences", content);
        var responseContent = await response.Content.ReadAsStringAsync();

        return Content(responseContent, "application/json");
    }
}

