using Microsoft.AspNetCore.Mvc;

namespace Practice_Project.Controllers
{
    public class CarController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
