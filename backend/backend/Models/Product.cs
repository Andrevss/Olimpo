using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProductId { get; set; }
        [Required]
        public required string ProductName { get; set; }
        [Required]
        public string ProductDescription { get; set; }
        [Required]
        public required string ProductPrice { get; set; }
        [Required]
        public int Stoke { get; set; }

        // relacionamento 1 para muitos entre Category e Product (cada categoria pode ter vários produtos)
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public bool isActive { get; set; }

        // relacionamento 1 para muitos entre Product e OrderItem (cada produto pode estar em vários pedidos)
        public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
        
    }
}
