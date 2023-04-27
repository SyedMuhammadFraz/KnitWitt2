using KnitWitt_G35_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;

namespace KnitWitt_G35_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly PersonContext _personContext;

        public EmployeeController(PersonContext pc)
        {
            _personContext = pc;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Person>>> GetEmployees()
        {
            if (_personContext.Person == null)
            {
                return NotFound();
            }
            return await _personContext.Person.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Person>> GetEmployees(int id)
        {
            if (_personContext.Person == null)
            {
                return NotFound();
            }
            var employee = await _personContext.Person.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            return employee;
        }


        [HttpPost]
        public async Task<ActionResult<Person>> PostEmployee(Person person)
        {
            _personContext.Person.Add(person);
            await _personContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmployees), new { id = person.Person_Id }, person);
        }

        [HttpPost("{id}")]
        public async Task<ActionResult> PutEmployee(int id, Person person)
        {
            if (id != person.Person_Id)
            {
                return BadRequest();
            }

            _personContext.Entry(person).State = EntityState.Modified;
            try
            {
                await _personContext.SaveChangesAsync();
            }
            catch
            {
                throw;
            }
            return Ok();
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult> DeleteEmployees(int id)
        {
            if (_personContext.Person == null)
            {
                return NotFound();
            }

            var employee=await _personContext.Person.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            _personContext.Person.Remove(employee);
            await _personContext.SaveChangesAsync();


            return Ok();
        }
    }
}
