using PointList.Core.DTOs;

namespace PointList.Core.Entities
{
    public class Instrumento(string nome)
    {
        public int Id { get; set; }
        public string Name { get; set; } = nome;
        public Portas Portas { get; set; } = new Portas();
        public int Quantidade { get; set; } = 0;
    }
}
