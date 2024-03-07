#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using projeto_vendas.Models;

namespace projeto_vendas.Controllers
{
    public class PagamentoComCartaosController : Controller
    {
        private readonly MyDbContext _context;

        public PagamentoComCartaosController(MyDbContext context)
        {
            _context = context;
        }

        // GET: PagamentoComCartaos
        public async Task<IActionResult> Index()
        {
            return View(await _context.PagamentoComCartao.ToListAsync());
        }

        // GET: PagamentoComCartaos/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pagamentoComCartao = await _context.PagamentoComCartao
                .FirstOrDefaultAsync(m => m.TipoDePagamentoId == id);
            if (pagamentoComCartao == null)
            {
                return NotFound();
            }

            return View(pagamentoComCartao);
        }

        // GET: PagamentoComCartaos/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: PagamentoComCartaos/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("NumeroDoCartao,Bandeira,TipoDePagamentoId,NomeDoCobrado,InformacoesAdicionais")] PagamentoComCartao pagamentoComCartao)
        {
            if (ModelState.IsValid)
            {
                _context.Add(pagamentoComCartao);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(pagamentoComCartao);
        }

        // GET: PagamentoComCartaos/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pagamentoComCartao = await _context.PagamentoComCartao.FindAsync(id);
            if (pagamentoComCartao == null)
            {
                return NotFound();
            }
            return View(pagamentoComCartao);
        }

        // POST: PagamentoComCartaos/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("NumeroDoCartao,Bandeira,TipoDePagamentoId,NomeDoCobrado,InformacoesAdicionais")] PagamentoComCartao pagamentoComCartao)
        {
            if (id != pagamentoComCartao.TipoDePagamentoId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(pagamentoComCartao);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PagamentoComCartaoExists(pagamentoComCartao.TipoDePagamentoId))
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
            return View(pagamentoComCartao);
        }

        // GET: PagamentoComCartaos/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var pagamentoComCartao = await _context.PagamentoComCartao
                .FirstOrDefaultAsync(m => m.TipoDePagamentoId == id);
            if (pagamentoComCartao == null)
            {
                return NotFound();
            }

            return View(pagamentoComCartao);
        }

        // POST: PagamentoComCartaos/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var pagamentoComCartao = await _context.PagamentoComCartao.FindAsync(id);
            _context.PagamentoComCartao.Remove(pagamentoComCartao);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool PagamentoComCartaoExists(int id)
        {
            return _context.PagamentoComCartao.Any(e => e.TipoDePagamentoId == id);
        }
    }
}
