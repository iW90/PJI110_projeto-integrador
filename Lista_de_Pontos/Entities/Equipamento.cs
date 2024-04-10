using System;
using System.Collections.Generic;
using Lista_de_Pontos.Entities;

namespace Lista_de_Pontos.Entities
{
    internal class Equipamento
    {
        public int Id { get; protected set; }
        public string Nome { get; protected set; }
        public Disciplina Disciplina { get; protected set; }
        public string Pavimento { get; protected set; }
        public List<Instrumento> Instrumentos { get; protected set; }
        public int EntradaAnalógica { get; protected set; }
        public int SaidaAnalógica { get; protected set; }
        public int EntradaDigital { get; protected set; }
        public int SaidaDigital { get; protected set; }
        public int TotalPortas { get; protected set; }
        private ListaDePontos listaDePontos;

        public Equipamento(int id, string nome, Disciplina disciplina, string pavimento, ListaDePontos listaDePontos)
        {
            Id = id;
            Nome = nome;
            Disciplina = disciplina;
            Pavimento = pavimento;
            Instrumentos = new List<Instrumento>();
            EntradaAnalógica = 0;
            SaidaAnalógica = 0;
            EntradaDigital = 0;
            SaidaDigital = 0;
            TotalPortas = 0;
            this.listaDePontos = listaDePontos;
        }

        public void AddInstrumento()
        {
            Console.WriteLine("Forneça os detalhes do instrumento:");
            Console.Write("Id: ");
            int idInstr = int.Parse(Console.ReadLine());
            Console.Write("Nome: ");
            string nome = Console.ReadLine();
            Console.Write("Descrição: ");
            string descricao = Console.ReadLine();
            Console.Write("Quantas portas este instrumento precisa? (1. EA, 2. SA, 3. ED, 4. SD, escreva a quantidade de cada porta separando por vírgula exemplo: 0,0,1,1): ");
            string portas = Console.ReadLine();
            string[] p = portas.Split(',');
            int entradaAnalógica = int.Parse(p[0]);
            int saidaAnalógica = int.Parse(p[1]);
            int entradaDigital = int.Parse(p[2]);
            int saidaDigital = int.Parse(p[3]);
            Console.Write($"Quantos {nome} serão necessários? ");
            int qtd = int.Parse(Console.ReadLine());
            Instrumento instrumento = new Instrumento(idInstr, nome, descricao, entradaAnalógica, saidaAnalógica, entradaDigital, saidaDigital, qtd);
            Instrumentos.Add(instrumento);
        }

        public void EditarEquipamento()
        {
            Console.WriteLine("Opções de edição do equipamento:");
            Console.WriteLine("1. Editar nome");
            Console.WriteLine("2. Editar disciplina");
            Console.WriteLine("3. Editar pavimento");
            Console.WriteLine("4. Editar instrumentos");
            Console.WriteLine("5. Voltar ao menu principal");

            int opcao;
            while (!int.TryParse(Console.ReadLine(), out opcao) || opcao < 1 || opcao > 5)
            {
                Console.WriteLine("Por favor, escolha uma opção válida (1 a 5): ");
            }

            switch (opcao)
            {
                case 1:
                    Console.Write("Novo nome do equipamento: ");
                    Nome = Console.ReadLine();
                    Console.WriteLine("Nome do equipamento atualizado com sucesso!");
                    break;
                case 2:
                    Console.WriteLine("Nova disciplina para o equipamento (Elétrica, Hidráulica, HVAC): ");
                    string disciplinaInput = Console.ReadLine();
                    Disciplina tempDisciplina;
                    while (!Enum.TryParse(disciplinaInput, true, out tempDisciplina))
                    {
                        Console.Write("Por favor, digite uma disciplina válida (Elétrica, Hidráulica, HVAC): ");
                        disciplinaInput = Console.ReadLine();
                    }
                    Disciplina = tempDisciplina;
                    Console.WriteLine("Disciplina do equipamento atualizada com sucesso!");
                    break;
                case 3:
                    Console.WriteLine("Pavimentos disponíveis:");
                    for (int i = 1; i <= listaDePontos.Pavimentos.Count; i++)
                    {
                        Console.WriteLine($"{i}. {listaDePontos.Pavimentos[i]}");
                    }
                    Console.Write("Escolha o novo pavimento: ");
                    int pavIndex = int.Parse(Console.ReadLine()) - 1;
                    Pavimento = listaDePontos.Pavimentos[pavIndex];
                    Console.WriteLine($"Pavimento do equipamento atualizado com sucesso para {Pavimento}!");
                    break;
                case 4:
                    EditarInstrumentos();
                    break;
                case 5:
                    Console.WriteLine("Retornando ao menu principal...");
                    break;
            }
        }

        public void EditarInstrumentos()
        {
            Console.WriteLine($"Editando instrumentos do equipamento: {Nome}");
            Console.WriteLine("Escolha o instrumento que deseja editar:");
            for (int i = 0; i < Instrumentos.Count; i++)
            {
                Console.WriteLine($"{i + 1}. {Instrumentos[i].Nome}");
            }
            Console.WriteLine($"{Instrumentos.Count + 1}. Voltar ao menu anterior");

            int opcao;
            while (!int.TryParse(Console.ReadLine(), out opcao) || opcao < 1 || opcao > Instrumentos.Count + 1)
            {
                Console.WriteLine("Por favor, escolha uma opção válida.");
            }

            if (opcao == Instrumentos.Count + 1)
                return; // Retorna ao menu anterior

            Instrumentos[opcao - 1].EditarInstrumento();
        }

        public void ExcluirInstrumento()
        {
            Console.WriteLine($"Excluindo instrumentos do equipamento: {Nome}");
            Console.WriteLine("Escolha o instrumento que deseja excluir:");
            for (int i = 0; i < Instrumentos.Count; i++)
            {
                Console.WriteLine($"{i + 1}. {Instrumentos[i].Nome}");
            }
            Console.WriteLine($"{Instrumentos.Count + 1}. Voltar ao menu anterior");

            int opcao;
            while (!int.TryParse(Console.ReadLine(), out opcao) || opcao < 1 || opcao > Instrumentos.Count + 1)
            {
                Console.WriteLine("Por favor, escolha uma opção válida.");
            }

            if (opcao == Instrumentos.Count + 1)
                return; // Retorna ao menu anterior

            Instrumentos.RemoveAt(opcao - 1);
            Console.WriteLine("Instrumento excluído com sucesso!");
        }

        public int SumPortas()
        {
            int sum = 0;
            foreach (Instrumento instrumento in Instrumentos)
            {
                int portas = instrumento.SumPortas();
                EntradaAnalógica += instrumento.EntradaAnalógica;
                SaidaAnalógica += instrumento.SaidaAnalógica;
                EntradaDigital += instrumento.EntradaDigital;
                SaidaDigital += instrumento.SaidaDigital;
                sum += portas;
            }
            return sum;
        }

        public override string ToString()
        {
            string instrumentosString = "";
            foreach (Instrumento instrumento in Instrumentos)
            {
                instrumentosString += $"\n{instrumento}";
            }
            int somPortas = SumPortas();
            return $"{Nome}\n{instrumentosString}\nTotal: {somPortas} - EA {EntradaAnalógica}, SA {SaidaAnalógica}, ED {EntradaDigital}, SD {SaidaDigital}";
        }
    }
}