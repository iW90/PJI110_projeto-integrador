using System;
using System.Collections.Generic;
using System.IO;

namespace Lista_de_Pontos.Entities
{
    internal class ListaDePontos
    {
        public int IdListPon { get; protected set; }
        public string Client { get; protected set; }
        public List<Disciplina> Disciplinas { get; protected set; }
        public List<string> Pavimentos { get; protected set; }
        public List<Equipamento> Equipamentos { get; protected set; }
        public int EntradaAnalógica { get; protected set; }
        public int SaidaAnalógica { get; protected set; }
        public int EntradaDigital { get; protected set; }
        public int SaidaDigital { get; protected set; }

        public ListaDePontos(int idListPon, string client, List<Disciplina> disciplinas, List<string> pavimentos)
        {
            IdListPon = idListPon;
            Client = client;
            Disciplinas = disciplinas;
            Pavimentos = pavimentos;
            Equipamentos = new List<Equipamento>();
        }

        public void AddEquip()
        {
            try
            {
                Console.Write("Id do equipamento: ");
                int id;
                while (!int.TryParse(Console.ReadLine(), out id) || id <= 0)
                {
                    Console.WriteLine("Por favor, digite um ID válido para o equipamento.");
                    Console.Write("Id do equipamento: ");
                }

                Console.Write("Nome do equipamento: ");
                string nome = Console.ReadLine();

                Console.WriteLine("Qual a disciplina do equipamento?");
                for (int i = 0; i < Disciplinas.Count; i++)
                {
                    Console.WriteLine($"{i + 1}. {Disciplinas[i]}");
                }
                int escDisc;
                while (!int.TryParse(Console.ReadLine(), out escDisc) || escDisc < 1 || escDisc > Disciplinas.Count)
                {
                    Console.WriteLine($"Por favor, escolha uma disciplina válida (1 a {Disciplinas.Count}).");
                }

                Disciplina disciplina = 0;

                foreach (Disciplina disc in Disciplinas)
                {
                    if ((Disciplina)escDisc == disc)
                    {
                        disciplina = (Disciplina)escDisc;
                    }
                    else if (escDisc >= 0 && escDisc <= 2 && Disciplinas.Count == 1)
                    {
                        disciplina = Disciplinas[0];
                        Console.WriteLine($"Disciplina: {disciplina}");
                    }
                    else
                    {
                        Console.WriteLine($"Disciplina não encontrada, atribuída {(Disciplina)escDisc}");
                    }
                }

                Console.WriteLine("Qual o pavimento do equipamento?");
                for (int i = 0; i < Pavimentos.Count; i++)
                {
                    Console.WriteLine($"{i + 1}. {Pavimentos[i]}");
                }
                int pavIndex;
                while (!int.TryParse(Console.ReadLine(), out pavIndex) || pavIndex < 1 || pavIndex > Pavimentos.Count)
                {
                    Console.WriteLine("Por favor, escolha um pavimento válido.");
                    Console.WriteLine("Qual o pavimento do equipamento?");
                }
                string pavimento = Pavimentos[pavIndex - 1];

                Equipamento equipamento = new Equipamento(id, nome, disciplina, pavimento, this);

                Equipamentos.Add(equipamento);

                Console.Write("Deseja incluir instrumentos? (S/N) ");
                char novoIns = char.ToUpper(Console.ReadKey().KeyChar);
                Console.WriteLine();
                if (novoIns == 'S')
                {
                    equipamento.AddInstrumento();
                }
                else if (novoIns != 'N')
                {
                    Console.WriteLine("Opção inválida. Não serão adicionados instrumentos.");
                }

                Console.WriteLine($"Equipamento {equipamento.Nome} criado com sucesso!");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao adicionar equipamento: {ex.Message}");
            }
        }

        public void EditarLista()
        {
            Console.WriteLine("Opções de edição:");
            Console.WriteLine("1. Editar nome do cliente");
            Console.WriteLine("2. Editar pavimentos");
            Console.WriteLine("3. Editar disciplinas");
            Console.WriteLine("4. Adicionar equipamento");
            Console.WriteLine("5. Editar equipamentos");
            Console.WriteLine("6. Voltar ao menu principal");

            int opcao;
            while (!int.TryParse(Console.ReadLine(), out opcao) || opcao < 1 || opcao > 6)
            {
                Console.WriteLine("Por favor, escolha uma opção válida (1 a 6): ");
            }

            switch (opcao)
            {
                case 1:
                    Console.Write("Novo nome do cliente: ");
                    Client = Console.ReadLine();
                    Console.WriteLine("Nome do cliente atualizado com sucesso!");
                    break;
                case 2:
                    Console.WriteLine("Pavimentos atuais:");
                    for (int i = 0; i < Pavimentos.Count; i++)
                    {
                        Console.WriteLine($"Pavimento #{i + 1}: {Pavimentos[i]}");
                    }
                    int numeroPavimento = ReadIndexInput("Digite o número do pavimento que deseja editar", Pavimentos.Count);
                    Console.Write($"Novo nome para o pavimento #{numeroPavimento}: ");
                    Pavimentos[numeroPavimento - 1] = Console.ReadLine();
                    Console.WriteLine($"Pavimento #{numeroPavimento} atualizado com sucesso!");
                    break;
                case 3:
                    Console.WriteLine("Disciplinas atuais:");
                    for (int i = 0; i < Disciplinas.Count; i++)
                    {
                        Console.WriteLine($"Disciplina #{i + 1}: {Disciplinas[i]}");
                    }
                    int numeroDisciplina = ReadIndexInput("Digite o número da disciplina que deseja editar (1. Elétrica, 2. Hidráulica, 3. HVAC)", Disciplinas.Count);
                    Console.Write($"Nova disciplina para a posição #{numeroDisciplina}: ");
                    Disciplinas[numeroDisciplina - 1] = (Disciplina)(ReadIndexInput("Digite o número da nova disciplina", Enum.GetNames(typeof(Disciplina)).Length) - 1);
                    Console.WriteLine($"Disciplina #{numeroDisciplina} atualizada com sucesso!");
                    break;
                case 4:
                    AddEquip();
                    break;
                case 5:
                    Console.WriteLine("Equipamentos atuais:");
                    for (int i = 0; i < Equipamentos.Count; i++)
                    {
                        Console.WriteLine($"{i + 1}. " + Equipamentos[i].ToString());
                    }
                    int equipIndex = ReadIndexInput("Escolha um número de equipamento para editar", Equipamentos.Count);
                    Equipamentos[equipIndex - 1].EditarEquipamento();
                    break;
                case 6:
                    Console.WriteLine("Retornando ao menu principal...");
                    break;
                default:
                    Console.WriteLine("Opção inválida. Tente novamente.");
                    break;
            }
        }

        // Método auxiliar para ler uma entrada de índice válido
        private int ReadIndexInput(string prompt, int maxIndex)
        {
            int index;
            do
            {
                Console.Write($"{prompt} (1 a {maxIndex}): ");
            } while (!int.TryParse(Console.ReadLine(), out index) || index < 1 || index > maxIndex);
            return index;
        }

        public void ExcluirLista()
        {
            // Confirmar a exclusão com o usuário
            Console.Write("Tem certeza que deseja excluir completamente a lista de pontos? (S/N): ");
            char confirmacao = char.ToUpper(Console.ReadKey().KeyChar);
            Console.WriteLine();

            if (confirmacao == 'S')
            {
                // Excluir todos os dados da lista de pontos
                IdListPon = 0;
                Client = string.Empty;
                Pavimentos.Clear();
                Disciplinas.Clear();
                Equipamentos.Clear();

                Console.WriteLine("Lista de pontos excluída com sucesso!");
            }
            else
            {
                Console.WriteLine("Operação de exclusão cancelada.");
            }
        }

        public void ExportarLista(string caminhoArquivo)
        {
            try
            {
                using (StreamWriter writer = new StreamWriter(caminhoArquivo))
                {
                    // Escrever cabeçalho
                    writer.WriteLine($"ID da Lista de Pontos: {IdListPon}");
                    writer.WriteLine($"Cliente: {Client}");

                    foreach (Disciplina disciplina in Disciplinas)
                    {
                        writer.WriteLine($"{disciplina}");
                        foreach (string pavimento in Pavimentos)
                        {
                            writer.WriteLine($"{pavimento}");
                            foreach (Equipamento equipamento in Equipamentos)
                            {
                                if (equipamento.Disciplina == disciplina && equipamento.Pavimento == pavimento)
                                {
                                    foreach (Instrumento instrumento in equipamento.Instrumentos)
                                    {
                                        writer.WriteLine(equipamento);
                                    }
                                }
                                else
                                {
                                    Console.WriteLine();
                                }
                            }
                        }
                    }
                    Console.WriteLine("Lista de pontos exportada com sucesso para o arquivo: " + caminhoArquivo);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine("Erro ao exportar lista de pontos: " + ex.Message);
            }
        }

        public int SumPortas()
        {
            int sum = 0;
            foreach (Equipamento equipamento in Equipamentos)
            {
                sum += equipamento.SumPortas();
                EntradaAnalógica += equipamento.EntradaAnalógica;
                SaidaAnalógica += equipamento.SaidaAnalógica;
                EntradaDigital += equipamento.EntradaDigital;
                SaidaDigital += equipamento.SaidaDigital;
            }
            return sum;
        }

        public void ShowLista()
        {
            Console.WriteLine($"Lista de Pontos #{IdListPon}"
                            + $"\nCliente: {Client}");

            // Iterar sobre cada disciplina
            foreach (Disciplina disciplina in Disciplinas)
            {
                Console.WriteLine($"Disciplina: {disciplina}");

                foreach (Equipamento equip in Equipamentos)
                {
                    // Verificar se o equipamento pertence à disciplina atual
                    if (equip.Disciplina == disciplina)
                    {
                        if (Pavimentos.Contains(equip.Pavimento))
                        {
                            Console.WriteLine($"Pavimento: {equip.Pavimento}");
                            Console.WriteLine(equip);

                        }
                    }
                }
            }
            int total = SumPortas();
            Console.WriteLine($"Total: {total} EA {EntradaAnalógica} SA {SaidaAnalógica} ED {EntradaDigital} SD {SaidaDigital}");
        }
    }
}
