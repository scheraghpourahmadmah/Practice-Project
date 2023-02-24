using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Practice_Project.SholehGallery
{
    public class Car
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public double Price { get; set; }
        [Required]
        public string Color { get; set; }
        [Required]
        public DateTime Year { get; set; }
        [Required]
        public bool IsActive { get; set; }
        [Required]
        [ForeignKey("Manufactor")]
        public int ManufactorId { get; set; }
        public Manufactor Manufactor { get; set; }
    }
}
