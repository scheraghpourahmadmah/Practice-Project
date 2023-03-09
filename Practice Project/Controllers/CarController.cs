using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Practice_Project.Data;
using Practice_Project.DTOs;
using Practice_Project.Models;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;

namespace Practice_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public CarController(ApplicationDbContext dbContext)
        {
            _db = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Car>>> GetCars()
        {
            var cars= await _db.Car.Include(c => c.Manufactor).ToListAsync();

            return Ok(cars);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Car>> GetCar(int id)
        {
            return await _db.Car.Include(c => c.Manufactor).FirstOrDefaultAsync(a => a.Id == id);
        }

        [HttpPost("addCar")]
        public async Task<IActionResult> AddCar(CarDto model)
        {
            var m = await _db.Manufactor.FindAsync(model.ManufactorId);

            if (m == null) return BadRequest();
            var carToAdd = new Car
            {
                Name = model.Name,
                Price = model.Price,
                Color = model.Color,
                Year = model.Year,
                IsActive = model.IsActive,
                ManufactorId = model.ManufactorId,
            };

            _db.Car.Add(carToAdd);
            await _db.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("editCar")]
        public async Task<IActionResult> EditCar(CarDto model)
        {
            var foundCar = await _db.Car.FindAsync(model.Id);
            if (foundCar == null)
            {
                return NotFound();
            }
            var m = await _db.Manufactor.FindAsync(model.ManufactorId);

            if (m == null) return BadRequest();

            foundCar.Name = model.Name;
            foundCar.Price = model.Price;
            foundCar.Color = model.Color;
            foundCar.Year = model.Year;
            foundCar.IsActive = model.IsActive;
            foundCar.ManufactorId = model.ManufactorId;

            _db.Car.Update(foundCar);
            await _db.SaveChangesAsync();

            return NoContent();
        }


        [HttpDelete("deleteCar/{id}")]
        public async Task<IActionResult> DeleteCar(int id)
        {
            var foundCar = await _db.Car.FindAsync(id);
            if (foundCar == null)
            {
                return NotFound();
            }

            _db.Car.Remove(foundCar);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}
