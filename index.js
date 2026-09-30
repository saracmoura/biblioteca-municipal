import { LivroFisico, Ebook } from './TipoDeItens.js';
import { AtendimentoBiblioteca } from './AtendimentoBiblioteca.js';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function iniciarSistema() {
  const rl = readline.createInterface({ input, output });

  try {
    console.log(" === Bem-vindo ao Sistema de Biblioteca Municipal! ===");

    const atendimento = new AtendimentoBiblioteca();

    console.log("\nCenário A: Falha de Tipo");
    atendimento.cadastrarNovoLeitor("Carlos", "Dez");

    console.log("\nCenário B: Falha de Regra de Negócio");
    atendimento.cadastrarNovoLeitor("Ana", 10);

    console.log("\nCenário C: Sucesso Absoluto");
    atendimento.cadastrarNovoLeitor("Mariana", 25);

    console.log("\n=== Qual item você deseja cadastrar? ===");
    console.log("1. Livro Físico");
    console.log("2. E-Book");

    const modalidade = Number(await rl.question("Digite o número do item escolhido: "));

    if (modalidade !== 1 && modalidade !== 2) {
      console.log("Opção inválida. Encerrando o atendimento.");
      return;
    }

    const titulo = await rl.question("Título: ");
    const autor = await rl.question("Autor: ");
    const anoPublicacao = Number(await rl.question("Ano de Publicação: "));

    let ClasseItem;
    let detalhe;

    if (modalidade === 1) {
      ClasseItem = LivroFisico;
      detalhe = await rl.question("Corredor onde o livro fica: ");
    } else {
      ClasseItem = Ebook;
      detalhe = await rl.question("Formato do arquivo (ex: PDF, EPUB): ");
    }

    const item = atendimento.cadastrarLivro(ClasseItem, titulo, autor, anoPublicacao, detalhe);

    if (!item) {
      return; 
    }

    console.log("\n=== SIMULAÇÃO DE DEVOLUÇÃO ===");

    let diasAtraso;
    do {
      diasAtraso = Number(await rl.question("Quantos dias de atraso tem essa devolução? "));
      if (Number.isNaN(diasAtraso) || diasAtraso < 0) {
        console.log("Atenção: digite apenas números, de 0 em diante.");
      }
    } while (Number.isNaN(diasAtraso) || diasAtraso < 0);

    const multa = item.calcularMulta(diasAtraso);
    console.log(`Valor total a pagar: R$ ${multa.toFixed(2)}`);

  } finally {
    rl.close();
  }
}

iniciarSistema();