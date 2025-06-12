using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Address
    {
        [Key]
        public int Address_id { get; set; }
        [Required]
        public required string Street { get; set; }
        [Required]
        public required int Number { get; set; }
        [Required]
        public required string Neighborhood { get; set; }
        [Required]
        public required string City { get; set; }
        [Required]
        public required string State { get; set; }
        [Required]
        public required string ZipCode { get; set; }
        public string Complement { get; set; }

    }
}
