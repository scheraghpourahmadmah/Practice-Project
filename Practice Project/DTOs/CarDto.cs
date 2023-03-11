using Practice_Project.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;

namespace Practice_Project.DTOs
{
    public class CarDto
    {
        public int Id { get; set; }
        
        public string Name { get; set; }
        
        public double Price { get; set; }
        
        public string Color { get; set; }
        
        public DateTime Year { get; set; }
        public int ManufactorId { get; set; }
        public string ManufactorName{ get; set; }
    }
}
