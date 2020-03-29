using Microsoft.AspNetCore.Mvc;
using SmallApp.Models;
using System.Collections.Generic;
using System.Linq;

namespace SmallApp.Controllers
{
  [ApiController]
    [Route("api/cars")]
    public class CarController : Controller
    {
        ApplicationContext db;
        public CarController(ApplicationContext context)
        {
            db = context;
      
          if ( !db.Cars.Any() )
          {
            db.Cars.Add(new Car { Name = "Tesla" , Model = "Model Y" , Price = 16970000 });
            db.Cars.Add(new Car { Name = "BMW" , Model = "X7" , Price = 13990000 });
            db.Cars.Add(new Car { Name = "Opel" , Model = "Astra" , Price = 4590000 });

            db.Countries.Add(new Country { Name = "Mercedes" , Model = "E-Class" , CountrySupplier = "Italy" , Price = 7990000 });
            db.Countries.Add(new Country { Name = "ВАЗ" , Model = "2110" , CountrySupplier = "Russia" , Price = 220000 });
            db.Countries.Add(new Country { Name = "Mercedes" , Model = "AMG S 63" , CountrySupplier = "Germany" , Price = 14900000 });
       
            db.Categories.Add(new CarCategory { Name = "Audi" , Model = "A7 " , Price = 4250000 , Category = "Luxe" });
            db.Categories.Add(new CarCategory { Name = "ВАЗ" , Model = "2109" , Price = 195000 , Category = "Cheap" });
            db.Categories.Add(new CarCategory { Name = "Mercedes" , Model = "Maybach " , Price = 24950000 , Category = "Business" });

            db.SaveChanges();
          }
        }

    [HttpGet]
        public IEnumerable<Car> Get()
        {
            return db.Cars.ToList();
        }

        [HttpGet("{id}")]
        public Car Get(int id)
        {
            Car car = db.Cars.FirstOrDefault(x => x.Id == id);
            return car;
        }

        [HttpPost]
        public IActionResult Post(Car car)
        {
            if (ModelState.IsValid)
            {
                db.Cars.Add(car);
                db.SaveChanges();
                return Ok(car);
            }

            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Car car)
        {
            if (ModelState.IsValid)
            {
                db.Update(car);
                db.SaveChanges();
                return Ok(car);
            }

            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Car car = db.Cars.FirstOrDefault(x => x.Id == id);

            if (car != null)
            {
                db.Cars.Remove(car);
                db.SaveChanges();
            }

            return Ok(car);
        }
    }
}
