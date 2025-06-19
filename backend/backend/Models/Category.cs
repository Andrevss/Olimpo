using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Category
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CategoryId { get; set; }
        [Required]
        public required string CategoryName { get; set; }
        public string? Description { get; set; }
        public ICollection<Product>? Products { get; set; } = new List<Product>();
    }
}
