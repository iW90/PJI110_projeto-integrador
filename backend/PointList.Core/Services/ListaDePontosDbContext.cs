using Microsoft.EntityFrameworkCore;
using PointList.Core/Entities;
using System;

public class ListaDePontosDbContext : DbContext
{
    public ListaDePontosDbContext(DbContextOptions<ListaDePontosDbContext> options) : base(options) { }

    public DbSet<Equipmento> Equipmentos { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}
