using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class User
    {
        [Key]
        public int User_id { get; set; }
        [Required]
        public required string Name { get; set; }
        [Required]
        public required string Email { get; set; }
        [Required]
        public required string Password { get; set; }
        [Required]
        public required string PhoneNumber { get; set; }
        [ForeignKey("Address_id")]
        public int Address_id { get; set; }
        public Address Address { get; set; }
    }
}
