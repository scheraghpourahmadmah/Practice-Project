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
        public async Task<ActionResult<IEnumerable<CarDto>>> GetCars()
        {
            //var cars= await _db.Car.Include(c => c.Manufactor).Select(x => new CarDto
            //{
            //    Id = x.Id,
            //    Color = x.Color,
            //    Name = x.Name,
            //    Price = x.Price,
            //    Year = x.Year,
            //    ManufactorName = x.Manufactor.Name
            //}).ToListAsync();

            var cars = await _db.Car.Include(c => c.Manufactor).ToListAsync();

            var toReturn = new List<CarDto>();
            foreach (var car in cars)
            {
                var toAdd = new CarDto
                {
                    Id = car.Id,
                    Color = car.Color,
                    Name = car.Name,
                    Price = car.Price,
                    Year = car.Year,
                    ManufactorName = car.Manufactor.Name
                };

                toReturn.Add(toAdd);
            }

            return Ok(toReturn);
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
                ManufactorId = 1004,// model.ManufactorId,
                IsActive = true
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
