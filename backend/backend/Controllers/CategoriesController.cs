using backend.Context;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CategoriesController : Controller
    {
        private readonly OlimpoDbContext _context;

        public CategoriesController(OlimpoDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> Get()
        {
                var categories = await _context.Categories
                    .Include(c => c.Products)
                    .AsNoTracking().ToListAsync();

                if (categories == null)
                {
                _logger.LogWarning("Address not founded.");
                return NotFound();
                }

                return categories;
                {

                }
        }

        [HttpGet("{id}", Name = "GetCategory")]
        public async  Task<ActionResult<Category>> Get(int id)
        {
                var category = await _context.Categories
                    .Include(c => c.Products)
                    .AsNoTracking().FirstOrDefaultAsync(c => c.CategoryId == id);
                if (category == null)
                {
                _logger.LogWarning($"Address with ID {id} not founded.");
                return NotFound();
                }
                return category;
        }

        [HttpPost]
        public async Task<ActionResult<Category>> Post(Category category)
        {
                if (category == null)
                {
                    _logger.LogWarning("Wrong data");
                    return BadRequest();
                }
                _context.Categories.Add(category);
                await _context.SaveChangesAsync();
                return CreatedAtRoute("GetCategory", new { id = category.CategoryId }, category);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Category category)
        {
                if( id != category.CategoryId)
                {
                    _logger.LogWarning($"Category ID mismatch: expected {id}, received {category.CategoryId}.");
                    return BadRequest("Category ID mismatch.");
                }

                _context.Entry(category).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return Ok(category);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
                var category = _context.Categories.FirstOrDefault(c => c.CategoryId == id);

                if (category == null)
                {
                    _logger.LogWarning($"Category with ID {id} not found.");
                return NotFound();
                }

                _context.Categories.Remove(category);
                await _context.SaveChangesAsync();

                return Ok(category);
        }
    }
}