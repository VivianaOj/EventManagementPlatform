using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using WebApplicationEvent.Data;
using WebApplicationEvent.Models;

namespace WebApplicationEvent.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventController : ControllerBase
    {
        private readonly WebApplicationEventContext _context;

        public EventController(WebApplicationEventContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<events>>> GetEvents()
        {
            return Ok(await _context.events.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<events>> GetEvent(int id)
        {
            var ev = await _context.events.FindAsync(id);
            return ev == null ? NotFound() : Ok(ev);
        }

        [HttpPost]
        public async Task<ActionResult<events>> CreateEvent(events ev)
        {
            _context.events.Add(ev);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEvent), new { id = ev.id }, ev);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEvent(int id, events ev)
        {
            if (id != ev.id) return BadRequest();
            _context.Entry(ev).State = EntityState.Modified;

            try { await _context.SaveChangesAsync(); }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.events.Any(e => e.id == id)) return NotFound();
                throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEvent(int id)
        {
            var ev = await _context.events.FindAsync(id);
            if (ev == null) return NotFound();

            _context.events.Remove(ev);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
