using System;
using backend.Context;
using backend.Models;

namespace backend.Repositories;

public class CategoryRepository : ICategoryRepository
{
    private readonly OlimpoDbContext _context;

    public CategoryRepository(OlimpoDbContext context)
    {
        _context = context;
    }

    public IEnumerable<Category> GetCategories()
    {
        return _context.Categories.ToList();
    }
    public Category GetCategoryById(int id)
    {
        return _context.Categories.FirstOrDefault(c => c.CategoryId == id);
    }
    public Category CreateCategory(Category category)
    {
        if (category == null)
        {
            throw new ArgumentNullException(nameof(category));
        }

        _context.Categories.Add(category);
        _context.SaveChanges();
        return category;
    }
    public Category UpdateCategory(Category category)
    {
        if (category == null)
        {
            throw new ArgumentNullException(nameof(category));
        }

        _context.Entry(category).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        _context.SaveChanges();
        return category;
    }
     public Category DeleteCategory(int id)
    {
        var category = _context.Categories.Find(id);
        if (category == null)
        {
            throw new ArgumentNullException(nameof(category));
        }

        _context.Categories.Remove(category);
        _context.SaveChanges();
        return category;
    }
}
