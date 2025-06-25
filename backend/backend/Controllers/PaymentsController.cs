using backend.Context;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PaymentsController : Controller
    {
        private readonly OlimpoDbContext _context;

        public PaymentsController(OlimpoDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Payment>>> Get()
        {
            try
            {
                var payments = await _context.Payments
                    .Include(p => p.Order)
                        .ThenInclude(o => o.User)
                    .AsNoTracking().ToListAsync();

                if (payments == null)
                {
                    return NotFound();
                }

                return payments;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database. Please try again later.");
            }
        }

        [HttpGet("{id}", Name = "GetPayment")]
        public async Task<ActionResult<Payment>> Get(int id)
        {
            try
            {
                var payment = await _context.Payments
                    .Include(p => p.Order)
                        .ThenInclude(o => o.User)
                    .AsNoTracking().FirstOrDefaultAsync(p => p.PaymentId == id);
                if (payment == null)
                {
                    return NotFound();
                }
                return payment;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database. Please try again later.");
            }

        }

        [HttpPost]
        public async Task<ActionResult<Payment>> Post(Payment payment)
        {
            try
            {
                if (payment == null)
                {
                    return BadRequest();
                }
                _context.Payments.Add(payment);
                await _context.SaveChangesAsync();
                return CreatedAtRoute("GetPayment", new { id = payment.PaymentId }, payment);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error saving data to the database. Please try again later.");
            }
        }
    }
}
