using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Payment
    {
        [Key]
        public int PaymentId { get; set; }

        public int OrderId { get; set; }
        public Order Order { get; set; }

        [Required]
        public required string Method { get; set; }
        [Required]
        public required string Status { get; set; }
        [Required]
        public required DateTime PaymentDate { get; set; }  
    }
}
