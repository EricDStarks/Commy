using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Commy;
using Commy.Models;
using System.Collections;

namespace Commy.Controllers

{
    [ApiController]
    [Route("[controller]")]
    public class CategoriesController : Controller
    {
        private readonly CommyDBContext _context;

        public CategoriesController(CommyDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable> GetCategories()
        {
            var categories = _context.Categories.ToList();
            return categories;
        }

        [HttpPost]
        public async Task<ActionResult> CreateCategory(string name, string description)
        {
            Category category = new Category(name, description);
            _context.Categories.Add(category);
            _context.SaveChanges();
            return Ok(category);
        }

        [HttpDelete]

        public async Task<ActionResult> DeleteCategory(int Id)
        {
            var category = await _context.Categories.FindAsync(Id);
            _context.Categories.Remove(category);
            _context.SaveChanges();
            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> UpdateCategory([FromBody] Category categoryUpdate)
        {
            //Category categoryAdd = await _context.Categories.FindAsync(Id);
            _context.Categories.Update(categoryUpdate);
            _context.SaveChanges();
            return Ok();
        }


    }
}
