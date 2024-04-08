using PointList.Core.DTOs;

namespace PointList.Core.Entities
{
    public class Instrumento(string nome)
    {
        public int Id { get; set; }
        public string Nome { get; set; } = nome;
        public string Descricao { get; set; } = string.Empty;
        public Portas Portas { get; set; } = new Portas();
        public int Quantidade { get; set; } = 0;
    }
}
