using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Order
    {
        [Key]
        public int Order_id { get; set; }
        public int User_id { get; set; }
        public User User { get; set; }
        public int Address_id { get; set; }
        public Address Address { get; set; }
        [Required]
        public required string Status { get; set; }
        [Required]
        public required DateTime OrderDate { get; set; }
        [Required]
        public required string TotalPrice { get; set; }

        public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    }
}
