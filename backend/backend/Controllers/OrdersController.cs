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
            try
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
                    return NotFound();
                }
                return orders;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database. Please try again later.");
            }
        }

        [HttpGet("{id}", Name = "GetOrder")]
        public async Task<ActionResult<Order>> Get(int id)
        {
            try
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
                    return NotFound();
                }
                return order;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database. Please try again later.");
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post(Order order)
        {
            try
            {
                if(order == null)
                {
                    return BadRequest("Order cannot be null.");
                }

                _context.Orders.Add(order);
                await _context.SaveChangesAsync();

                return new CreatedAtRouteResult("GetOrder", new { id = order.OrderId }, order);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error saving data to the database. Please try again later.");
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Order order)
        {
            try
            {
                if (id != order.OrderId)
                {
                    return BadRequest("Category ID mismatch.");
                }

                _context.Entry(order).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return Ok(order);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error updating data in the database. Please try again later.");
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                var product = await _context.Orders.FirstOrDefaultAsync(o => o.OrderId == id);

                if (product == null)
                {
                    return NotFound();
                }

                _context.Orders.Remove(product);
                _context.SaveChanges();

                return Ok(product);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error deleting data from the database. Please try again later.");
            }
        }
    }
}
