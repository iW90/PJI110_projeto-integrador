using PointList.Core.Entities;

namespace PointList.Core.DTOs
{
    public class Disciplina (string tipo, string pavimento)
    {
        public string Tipo { get; set; } = tipo;
        public string Pavimento { get; set; } = pavimento;
        public List<Equipamento> Equipamentos { get; set; } = new List<Equipamento>();
        public Portas TotalPortas { get; set; } = new Portas();
        public int TotalGeral { get; set; } = 0;
    }
}