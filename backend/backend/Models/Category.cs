using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Category
    {
        public Category()
        {
            Products = new Collection<Product>();
        }
        [Key]
        public int CategoryId { get; set; }
        [Required]
        public required string Category_name { get; set; }
        public string? Description { get; set; }
        public ICollection<Product>? Products { get; set; }
    }
}
