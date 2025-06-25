using backend.Context;
using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> Get()
        {
            try
            {
                var products = await _context.Products.AsNoTracking().ToListAsync();

                if (products == null)
                {
                    return NotFound();
                }
                return products;
            }
            catch (Exception)
            {

                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database. Please try again later.");
            }
        }

        [HttpGet("{id}", Name="GetProduct")]
        public async Task<ActionResult<Product>> Get(int id)
        {
            var product = await _context.Products.AsNoTracking().Take(10).FirstOrDefaultAsync(p => p.ProductId == id);

            if (_context.Products == null)
            {
                return NotFound();
            }

            return product;

        }

        [HttpPost]
        public async Task<ActionResult> Post(Product product)
        {
            if(product == null)
            {
                return BadRequest();
            }

            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return new CreatedAtRouteResult("GetProduct", new { id = product.ProductId }, product);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Product product)
        {
            if(id != product.ProductId)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok(product);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var product = _context.Products.FirstOrDefault(p => p.ProductId == id);

            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return Ok(product); 
        }
    }
}
