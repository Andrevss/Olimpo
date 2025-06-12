using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Category
    {
        [Key]
        public int Category_id { get; set; }
        [Required]
        public required string Category_name { get; set; }
        public string? Description { get; set; }
    }
}
