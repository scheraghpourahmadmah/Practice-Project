using System.ComponentModel.DataAnnotations;

namespace Practice_Project.Models
{
    public class Manufactor
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public bool IsActive { get; set; }
    }
}
