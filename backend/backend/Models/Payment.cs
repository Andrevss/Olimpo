using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Payment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PaymentId { get; set; }

        // relacionamento 1 para 1 entre Order e Payment (cada pedido tem um pagamento associado)
        [ForeignKey("Order")]
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
