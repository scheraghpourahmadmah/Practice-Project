using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Practice_Project.Data;
using Practice_Project.SholehGallery;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace Practice_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManufactorController : ControllerBase 
    {
        private readonly ApplicationDbContext _db;
        public ManufactorController(ApplicationDbContext dbContext)
        {
            _db = dbContext;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Manufactor>>> GetManufactors()
        {
            var manufactors = await _db.Manufactor.ToListAsync();

            return Ok(manufactors);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Manufactor>> GetManufactor(int id)
        {
            return await _db.Manufactor.FindAsync(id);
        }

        [HttpPost("addManufactor")]
        public async Task<IActionResult> AddManufactor(Manufactor model)
        {
            _db.Manufactor.Add(model);
            await _db.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("editManufactor")]
        public async Task<IActionResult> EditManufactor(Manufactor model)
        {
            var foundManufactor = await _db.Manufactor.FindAsync(model.Id);
            if(foundManufactor == null)
            {
                return NotFound();
            }

            foundManufactor.Name = model.Name;
            foundManufactor.IsActive = model.IsActive;

            _db.Manufactor.Update(foundManufactor);
            await _db.SaveChangesAsync();
            
            return NoContent();
        }

        [HttpDelete("deleteManufactor/{id}")]
        public async Task<ActionResult> DeleteManufactor(int id)
        {
            var foundManufactor = await _db.Manufactor.FindAsync(id);
            if (foundManufactor == null)
            {
                return NotFound();
            }
            
            _db.Manufactor.Remove(foundManufactor);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
