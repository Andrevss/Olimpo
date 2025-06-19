using backend.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly OlimpoDbContext _context;

        public ProductsController(OlimpoDbContext context)
        {
            _context = context;
        }

    }
}
