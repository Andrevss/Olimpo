using backend.Context;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AddressesController : Controller
    {
        private readonly OlimpoDbContext _context;

        public AddressesController(OlimpoDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Address>>> Get()
        {
            try
            {
                var addresses = await _context.Addresses
                    .Include(a => a.User)
                    .AsNoTracking().ToListAsync();

                if (addresses == null)
                {
                    return NotFound();
                }

                return addresses;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database. Please try again later.");
            }
        }

        [HttpGet("{id}", Name = "GetAddress")]
        public async Task<ActionResult<Address>> Get(int id)
        {
            try
            {
                var address = await _context.Addresses
                    .Include(a => a.User)
                    .AsNoTracking().FirstOrDefaultAsync(a => a.AddressId == id);
                if (address == null)
                {
                    return NotFound();
                }
                return address;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database. Please try again later.");
            }
        }

        [HttpPost]
        public async Task<ActionResult<Address>> Post(Address address)
        {
            try
            {
                if (address == null)
                {
                    return BadRequest();
                }
                _context.Addresses.Add(address);
                _context.SaveChanges();
                return CreatedAtRoute("GetAddress", new { id = address.AddressId }, address);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error saving data to the database. Please try again later.");
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Address>> Put(int id, Address address)
        {
            try
            {
                if (id != address.AddressId)
                {
                    return BadRequest();
                }
                _context.Entry(address).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return NoContent();
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
                var address = await _context.Addresses.FindAsync(id);
                if (address == null)
                {
                    return NotFound();
                }
                _context.Addresses.Remove(address);
                _context.SaveChanges();
                return NoContent();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error deleting data from the database. Please try again later.");
            }
        }
    }
}
