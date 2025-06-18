using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class OrderItem
    {
        [Key]

        public int oItemId { get; set; }
        public int OrderId { get; set; }

        public int OItem_Id { get; set; }
        public int Order_Id { get; set; }
        public Order Order { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public decimal UnitPrice { get; set; }
        public ICollection<Product> Products { get; set; } = new List<Product>();

        public OrderItem()
        {
            Products = new List<Product>();
        }

    }
}
