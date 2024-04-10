using System;
using System.Collections.Generic;
using Lista_de_Pontos.Entities;

namespace Lista_de_Pontos
{
    class Program
    {
        static ListaDePontos listPon;

        static void Main(string[] args)
        {
            Console.WriteLine("Bem vindo(a) à Lista de Pontos!");
            Menu();
        }

        static void Menu()
        {
            try
            {
                do
                {
                    Console.WriteLine("Escolha uma opção:");
                    Console.WriteLine("\n1. Nova lista de pontos"
                                    + "\n2. Editar lista de pontos"
                                    + "\n3. Excluir lista de pontos"
                                    + "\n4. Exportar lista de pontos"
                                    + "\n5. Ver lista de pontos atual"
                                    + "\n6. Sair");
                    int opcao;
                    while (!int.TryParse(Console.ReadLine(), out opcao) || opcao < 1 || opcao > 6)
                    {
                        Console.WriteLine("Opção inválida. Tente novamente.");
                    }

                    switch (opcao)
                    {
                        case 1:
                            CriarNovaLista();
                            break;
                        case 2:
                            if (listPon != null)
                                listPon.EditarLista();
                            else
                                Console.WriteLine("Crie uma nova lista de pontos primeiro.");
                            break;
                        case 3:
                            if (listPon != null)
                                listPon.ExcluirLista();
                            else
                                Console.WriteLine("Crie uma nova lista de pontos primeiro.");
                            break;
                        case 4:
                            if (listPon != null)
                            {
                                Console.Write("Digite o nome do arquivo para exportar a lista de pontos (ex: lista_de_pontos.txt): ");
                                string nomeArquivo = Console.ReadLine();
                                listPon.ExportarLista(@$"C:\Users\alelo\OneDrive\Faculdade\Univesp\Projeto_Integrador_I-1-sem-2024\{nomeArquivo}");
                            }
                            else
                                Console.WriteLine("Crie uma nova lista de pontos primeiro.");
                            break;
                        case 5:
                            if (listPon != null)
                                listPon.ShowLista();
                            else
                                Console.WriteLine("Crie uma nova lista de pontos primeiro.");
                            break;
                        case 6:
                            Environment.Exit(0); // Sair do programa
                            break;
                    }
                }while (true);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Ocorreu um erro: " + ex.Message);
            }
        }

        static void CriarNovaLista()
        {
            try
            {
                Console.Write("Digite o ID da lista de pontos: ");
                int id = LerInteiroPositivo();

                Console.Write("Nome do cliente: ");
                string cliente = Console.ReadLine();

                int numDisc = LerQuantidade("Quantas disciplinas serão automatizadas? (min 1) ");
                List<Disciplina> disciplinas = LerListaDisciplinas(numDisc);

                int numPav = LerQuantidade("Quantos pavimentos existem no prédio (min 1)? ");
                List<string> pavimentos = LerListaStrings(numPav, "Pavimento");

                listPon = new ListaDePontos(id, cliente, disciplinas, pavimentos);
                Console.WriteLine("Lista de pontos criada com sucesso!");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Erro ao criar lista de pontos: " + ex.Message);
            }
        }

        static int LerInteiroPositivo()
        {
            int valor;
            while (!int.TryParse(Console.ReadLine(), out valor) || valor <= 0)
            {
                Console.Write("Por favor, digite um valor inteiro positivo: ");
            }
            return valor;
        }

        static int LerQuantidade(string mensagem)
        {
            int quantidade;
            do
            {
                Console.Write(mensagem);
            } while (!int.TryParse(Console.ReadLine(), out quantidade) || quantidade < 1);
            return quantidade;
        }

        static List<string> LerListaStrings(int quantidade, string prefixo)
        {
            List<string> lista = new List<string>();
            for (int i = 1; i <= quantidade; i++)
            {
                Console.Write($"{prefixo} #{i}: ");
                lista.Add(Console.ReadLine());
            }
            return lista;
        }

        static List<Disciplina> LerListaDisciplinas(int quantidade)
        {
            List<Disciplina> disciplinas = new List<Disciplina>();
            for (int i = 1; i <= quantidade; i++)
            {
                Console.Write($"Disciplina #{i} (Elétrica, Hidráulica ou HVAC): ");
                string disciplinaInput = Console.ReadLine();
                Disciplina disciplina;
                while (!Enum.TryParse(disciplinaInput, true, out disciplina))
                {
                    Console.Write("Por favor, digite uma disciplina válida (Elétrica, Hidráulica ou HVAC): ");
                    disciplinaInput = Console.ReadLine();
                }
                disciplinas.Add(disciplina);
            }
            return disciplinas;
        }
    }
}