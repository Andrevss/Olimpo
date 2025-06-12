using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class OrderItem
    {
        [Key]
        public int oItem_Id { get; set; }
        [ForeignKey("Order_id")]
        public int Order_Id { get; set; }
        public Order Order { get; set; }
        [ForeignKey("Product_id")]
        public int Product_Id { get; set; }
        public Product Product { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public decimal UnitPrice { get; set; }
    }
}
