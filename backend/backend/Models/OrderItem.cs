using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace backend.Models
{
    public class OrderItem
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int oItemId { get; set; }

        //relacionamento 1 para muitos entre Order e OrderItem (cada pedido pode ter vários itens)
        public int OrderId { get; set; }
        public Order Order { get; set; }

        // relacionamento 1 para muitos entre Product e OrderItem (cada produto pode estar em vários pedidos)
        public int ProductId { get; set; }
        public Product Product { get; set; }

        [Required]
        public int Quantity { get; set; }
        [Required]
        public decimal UnitPrice { get; set; }

    }
}
