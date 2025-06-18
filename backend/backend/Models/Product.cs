using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        [Required]
        public required string Product_name { get; set; }
        [Required]
        public string Product_description { get; set; }
        [Required]
        public required string Product_price { get; set; }
        [Required]
        public int Stoke { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public bool isActive { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
        public Product()
        {
            OrderItems = new List<OrderItem>();
        }
    }
}
