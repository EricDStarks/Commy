using System.Collections;
using Commy.Models;
using Microsoft.AspNetCore.Mvc;


namespace Commy.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController: ControllerBase
    {
        private CommyDBContext _context { get; set; }
        public ProductsController(CommyDBContext context) 
        {
            _context = context;
        }

        
    }
}
