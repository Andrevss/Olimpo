using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Product
    {
        [Key]
        public int Product_id { get; set; }
        [Required]
        public required string Product_name { get; set; }
        [Required]
        public string Product_description { get; set; }
        [Required]
        public required string Product_price { get; set; }
        [Required]
        public int Stoke { get; set; }
        [ForeignKey("Category_id")]
        public int Category_id { get; set; }
        public Category Category { get; set; }
        public bool isActive { get; set; }
    }
}
