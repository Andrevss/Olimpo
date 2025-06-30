using System;
using backend.Models;
namespace backend.Repositories;

public interface ICategoryRepository
{
    IEnumerable<Category> GetCategories();
    Category GetCategoryById(int id);
    Category CreateCategory(Category category);
    Category UpdateCategory(Category category);
    Category DeleteCategory(int id);
}
