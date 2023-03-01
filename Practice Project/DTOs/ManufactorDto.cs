using System.ComponentModel.DataAnnotations;

namespace Practice_Project.DTOs
{
    public class ManufactorDto
    {
        public int? Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public bool IsActive { get; set; }
    }
}
