using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmallApp.Models
{
    public class Car
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int Id { get; set; }

        [Required]
        [StringLength (12, ErrorMessage = "The Car Name value cannot exceed 12 characters. ")]
        public string Name { get; set; }

        [Required]
        [StringLength(12, ErrorMessage = "The Car Model value cannot exceed 12 characters. ")]
        public string Model { get; set; }

        [Range(0, 999999999, ErrorMessage = "The Car Price value cannot exceed 999.999.999. ")]
        public int Price { get; set; }
    }

  public class CarCategory : Car
  {
    [Required]
    [StringLength(16 , ErrorMessage = "The Car Category value cannot exceed 16 characters. ")]
    public string Category { get; set; }
  }

  public class Country : Car
  {
    [Required]
    [StringLength(10 , ErrorMessage = "The Car Country value cannot exceed 10 characters. ")]
    public string CountrySupplier { get; set; }
  }
}