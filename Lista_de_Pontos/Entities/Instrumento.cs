using System;
using System.Collections.Generic;

namespace Lista_de_Pontos.Entities
{
    internal class Instrumento
    {
        public int IdInstr { get; protected set; }
        public string Nome { get; protected set; }
        public string Descricao { get; protected set; }
        public int EntradaAnalógica { get; protected set; }
        public int SaidaAnalógica { get; protected set; }
        public int EntradaDigital { get; protected set; }
        public int SaidaDigital { get; protected set; }
        public int Qtd { get; set; }

        public Instrumento(int idInstr, string nome, string descricao, int entradaAnalógica, int saidaAnalógica, int entradaDigital, int saidaDigital, int qtd)
        {
            IdInstr = idInstr;
            Nome = nome;
            Descricao = descricao;
            EntradaAnalógica = entradaAnalógica;
            SaidaAnalógica = saidaAnalógica;
            EntradaDigital = entradaDigital;
            SaidaDigital = saidaDigital;
            Qtd = qtd;
        }

        public void EditarInstrumento()
        {
            Console.WriteLine($"Editando instrumento: {Nome}");
            Console.WriteLine("Escolha uma opção:");
            Console.WriteLine("1. Editar nome");
            Console.WriteLine("2. Editar descrição");
            Console.WriteLine("3. Editar portas");
            Console.WriteLine("4. Editar quantidade em estoque");
            Console.WriteLine("5. Voltar ao menu anterior");

            int opcao;
            while (!int.TryParse(Console.ReadLine(), out opcao) || opcao < 1 || opcao > 5)
            {
                Console.WriteLine("Por favor, escolha uma opção válida (1 a 5): ");
            }

            switch (opcao)
            {
                case 1:
                    Console.Write("Novo nome do instrumento: ");
                    Nome = Console.ReadLine();
                    Console.WriteLine("Nome do instrumento atualizado com sucesso!");
                    break;
                case 2:
                    Console.Write("Nova descrição do instrumento: ");
                    Descricao = Console.ReadLine();
                    Console.WriteLine("Descrição do instrumento atualizada com sucesso!");
                    break;
                case 3:
                    EditarPortas();
                    break;
                case 4:
                    Console.Write("Nova quantidade em estoque: ");
                    Qtd = int.Parse(Console.ReadLine());
                    Console.WriteLine("Quantidade em estoque do instrumento atualizada com sucesso!");
                    break;
                case 5:
                    Console.WriteLine("Retornando ao menu anterior...");
                    break;
            }
        }

        private int ObterQuantidadePortas(string mensagem)
        {
            int quantidade;
            bool entradaValida = false;

            do
            {
                Console.Write(mensagem);
                if (int.TryParse(Console.ReadLine(), out quantidade))
                {
                    entradaValida = true;
                }
                else
                {
                    Console.WriteLine("Por favor, insira um valor inteiro válido.");
                }
            } while (!entradaValida);

            return quantidade;
        }

        private void EditarPortas()
        {
            Console.WriteLine("Editando portas do instrumento:");

            EntradaAnalógica = ObterQuantidadePortas("Nova quantidade de entrada analógica: ");
            SaidaAnalógica = ObterQuantidadePortas("Nova quantidade de saída analógica: ");
            EntradaDigital = ObterQuantidadePortas("Nova quantidade de entrada digital: ");
            SaidaDigital = ObterQuantidadePortas("Nova quantidade de saída digital: ");

            Console.WriteLine("Portas do instrumento atualizadas com sucesso!");
        }

        public int SumPortas()
        {
            return EntradaAnalógica + SaidaAnalógica + EntradaDigital + SaidaDigital;
        }

        public override string ToString()
        {
            return $"#{IdInstr}. {Descricao} - Entrada Analógica: {EntradaAnalógica}, Saída Analógica: {SaidaAnalógica}, Entrada Digital: {EntradaDigital}, Saída Digital: {SaidaDigital} - {Nome} - Em estoque: {Qtd}";
        }
    }
}