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
            try
            {
                var categories = await _context.Categories
                    .Include(c => c.Products)
                    .AsNoTracking().ToListAsync();

                if (categories == null)
                {
                    return NotFound();
                }

                return categories;
                {

                }
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database. Please try again later.");
            }
        }

        [HttpGet("{id}", Name = "GetCategory")]
        public async  Task<ActionResult<Category>> Get(int id)
        {
            try
            {
                var category = await _context.Categories
                    .Include(c => c.Products)
                    .AsNoTracking().FirstOrDefaultAsync(c => c.CategoryId == id);
                if (category == null)
                {
                    return NotFound();
                }
                return category;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database. Please try again later.");
            }
        }

        [HttpPost]
        public async Task<ActionResult<Category>> Post(Category category)
        {
            try
            {
                if (category == null)
                {
                    return BadRequest();
                }
                _context.Categories.Add(category);
                await _context.SaveChangesAsync();
                return CreatedAtRoute("GetCategory", new { id = category.CategoryId }, category);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error saving data to the database. Please try again later.");
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Category category)
        {
            try
            {
                if( id != category.CategoryId)
                {
                    return BadRequest("Category ID mismatch.");
                }

                _context.Entry(category).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return Ok(category);
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
                var category = _context.Categories.FirstOrDefault(c => c.CategoryId == id);

                if (category == null)
                {
                    return NotFound();
                }

                _context.Categories.Remove(category);
                await _context.SaveChangesAsync();

                return Ok(category);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error deleting data from the database. Please try again later.");
            }
        }
    }
}