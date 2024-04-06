using PointList.Core.DTOs;

namespace PointList.Core.Entities
{
    public class Equipamento(string nome)
    {
        public int Id { get; set; }
        public string Nome { get; set; } = nome;
        public string Description { get; set; } = string.Empty;
        public List<Instrumento> Instrumentos { get; set; } = new List<Instrumento>();
        public Portas TotalPortasInstrumentos { get; set; } = new Portas();
    }
}
