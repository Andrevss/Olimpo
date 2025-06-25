using backend.Context;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OrdersController : Controller
    {
        private readonly OlimpoDbContext _context;

        public OrdersController(OlimpoDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> Get()
        {
                var orders =  await _context.Orders
                    .Include(o => o.OrderItems)
                        .ThenInclude(oi => oi.Product)
                    .Include(o => o.User)
                    .Include(o => o.Address)
                    .Include(o => o.Payment)
                    .AsNoTracking().ToListAsync();
                if(orders == null)
                {
                _logger.LogWarning("Address not founded.");
                return NotFound();
                }
                return orders;
        }

        [HttpGet("{id}", Name = "GetOrder")]
        public async Task<ActionResult<Order>> Get(int id)
        {
                var order = _context.Orders
                    .Include(o => o.OrderItems)
                        .ThenInclude(oi => oi.Product)
                    .Include(o => o.User)
                    .Include(o => o.Address)
                    .Include(o => o.Payment)
                    .AsNoTracking().Take(10).FirstOrDefault(o => o.OrderId == id);
                if (_context.Orders == null)
                {
                    _logger.LogWarning($"Address with ID {id} not founded.");
                    return NotFound();
                }
                return order;
        }

        [HttpPost]
        public async Task<ActionResult> Post(Order order)
        {
                if(order == null)
                {
                _logger.LogWarning("Wrong data");
                return BadRequest("Order cannot be null.");
                }

                _context.Orders.Add(order);
                await _context.SaveChangesAsync();

                return new CreatedAtRouteResult("GetOrder", new { id = order.OrderId }, order);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Order order)
        {
                if (id != order.OrderId)
                {
                    _logger.LogWarning($"Category ID mismatch: expected {id}, received {order.OrderId}.");
                    return BadRequest("Category ID mismatch.");
                }

                _context.Entry(order).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return Ok(order);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
                var product = await _context.Orders.FirstOrDefaultAsync(o => o.OrderId == id);

                if (product == null)
                {
                    _logger.LogWarning($"Category with ID {id} not found.");
                    return NotFound();
                }

                _context.Orders.Remove(product);
                _context.SaveChanges();

                return Ok(product);
        }
    }
}
