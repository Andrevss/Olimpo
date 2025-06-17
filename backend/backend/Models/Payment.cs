using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Payment
    {
        [Key]
        public int Payment_id { get; set; }
        [ForeignKey("Order_id")]
        public int Order_id { get; set; }
        public Order Order { get; set; }
        [ForeignKey("User_id")]
        public int User_id { get; set; }
        public User User { get; set; }
        [Required]
        public required string Method { get; set; }
        [Required]
        public required string Status { get; set; }
        [Required]
        public required DateTime PaymentDate { get; set; }
    }
}
