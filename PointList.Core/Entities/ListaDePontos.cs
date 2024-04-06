using PointList.Core.DTOs;

namespace PointList.Core.Entities
{
    public class ListaDePontos(string cliente)
    {
        public int Id { get; init; }
        public string Cliente { get; set; } = cliente;
        public DateTime RegistradoEm { get; set; } = DateTime.Now;
        public List<Disciplina> Disciplinas { get; set; } = new List<Disciplina>();
        public Portas TotalPortas { get; set; } = new Portas();
        public int TotalGeral { get; set; } = 0;
    }
}
