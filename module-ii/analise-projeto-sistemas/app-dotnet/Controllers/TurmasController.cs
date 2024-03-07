using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using app_dotnet.Models;

namespace app_dotnet.Controllers
{
    public class TurmasController : Controller
    {
        private readonly MyDbContext _context;

        public TurmasController(MyDbContext context)
        {
            _context = context;
        }

        // GET: Turmas
        public async Task<IActionResult> Index()
        {
              return _context.Turma != null ? 
                          View(await _context.Turma.ToListAsync()) :
                          Problem("Entity set 'MyDbContext.Turma'  is null.");
        }

        // GET: Turmas/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Turma == null)
            {
                return NotFound();
            }

            var turma = await _context.Turma
                .FirstOrDefaultAsync(m => m.Id == id);
            if (turma == null)
            {
                return NotFound();
            }

            return View(turma);
        }

        // GET: Turmas/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Turmas/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Sigla,Ano")] Turma turma)
        {
            if (ModelState.IsValid)
            {
                _context.Add(turma);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(turma);
        }

        // GET: Turmas/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Turma == null)
            {
                return NotFound();
            }

            var turma = await _context.Turma.FindAsync(id);
            if (turma == null)
            {
                return NotFound();
            }
            return View(turma);
        }

        // POST: Turmas/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Sigla,Ano")] Turma turma)
        {
            if (id != turma.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(turma);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TurmaExists(turma.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(turma);
        }

        // GET: Turmas/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Turma == null)
            {
                return NotFound();
            }

            var turma = await _context.Turma
                .FirstOrDefaultAsync(m => m.Id == id);
            if (turma == null)
            {
                return NotFound();
            }

            return View(turma);
        }

        // POST: Turmas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Turma == null)
            {
                return Problem("Entity set 'MyDbContext.Turma'  is null.");
            }
            var turma = await _context.Turma.FindAsync(id);
            if (turma != null)
            {
                _context.Turma.Remove(turma);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool TurmaExists(int id)
        {
          return (_context.Turma?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
