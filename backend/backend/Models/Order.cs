using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int OrderId { get; set; }

        // relacionamento 1 para 1 entre Order e User (cada pedido é feito por um usuário)
        public int UserId { get; set; }
        public User User { get; set; }

        // relacionamento 1 para 1 entre Order e Address (cada pedido tem um endereço associado)
        public int AddressId { get; set; }
        public Address Address { get; set; }

        // relacionamento 1 para 1 entre Order e Payment (cada pedido tem um pagamento associado)
        public Payment Payment { get; set; }

        [Required]
        public required string Status { get; set; }
        [Required]
        public required DateTime OrderDate { get; set; }
        [Required]
        public required string TotalPrice { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    }
}
