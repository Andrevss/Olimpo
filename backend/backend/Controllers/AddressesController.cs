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
                var addresses = await _context.Addresses
                    .Include(a => a.User)
                    .AsNoTracking().ToListAsync();

                if (addresses == null)
                {
                _logger.LogWarning($"Address with ID {id} not founded.");
                return NotFound();
                }

            return addresses;
            
        }

        [HttpGet("{id}", Name = "GetAddress")]
        public async Task<ActionResult<Address>> Get(int id)
        {
                var address = await _context.Addresses
                    .Include(a => a.User)
                    .AsNoTracking().FirstOrDefaultAsync(a => a.AddressId == id);
                if (address == null)
                {
                    _logger.LogWarning($"Address with ID {id} not founded.");
                    return NotFound();
                }
                return address;
        }

        [HttpPost]
        public async Task<ActionResult<Address>> Post(Address address)
        {
                if (address == null)
                {
                    _logger.LogWarning("Wrong data");
                    return BadRequest();
                }
                _context.Addresses.Add(address);
                _context.SaveChanges();
                return CreatedAtRoute("GetAddress", new { id = address.AddressId }, address);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Address>> Put(int id, Address address)
        {
                if (id != address.AddressId)
                {
                    _logger.LogWarning($"Address ID mismatch: {id} != {address.AddressId}");
                    return BadRequest();
                }
                _context.Entry(address).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return NoContent();
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
                var address = await _context.Addresses.FindAsync(id);
                if (address == null)
                {
                    _logger.LogWarning($"Address with ID {Id} not found for deletion.", id);
                    return NotFound();
                }
                _context.Addresses.Remove(address);
                _context.SaveChanges();
                return NoContent();
    }
}
