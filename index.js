import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { LivroFisico, Ebook } from './TipoDeItens.js';
import { Leitor } from './Leitor.js';

async function iniciarSistema() {
  const rl = readline.createInterface({ input, output });

  try {
    console.log(" === Bem-vindo ao Sistema de Biblioteca Municipal! ===");

    const nomeLeitor = await rl.question("Digite o nome do leitor: ");
    const idadeLeitor = parseInt(await rl.question("Digite a idade do leitor: "));
    const leitor = new Leitor(nomeLeitor, idadeLeitor);

    console.log("\n=== Qual item você deseja cadastrar? ===");
    console.log("1. Livro Físico");
    console.log("2. E-Book");
    const modalidade = parseInt(await rl.question("Digite o número do item escolhido: "));

    const titulo = await rl.question('Título: ');
    const autor = await rl.question('Autor: ');
    const anoPublicacao = parseInt(await rl.question('Ano de Publicação: '));

    let item;

    if (modalidade === 1) {
      item = new LivroFisico(titulo, autor, anoPublicacao);
    } else if (modalidade === 2) {
      item = new Ebook(titulo, autor, anoPublicacao);
    } else {
      console.log("Opção inválida!");
      return;
    }

    console.log('\n=== SIMULAÇÃO DE DEVOLUÇÃO ===');
    const diasAtraso = parseInt(await rl.question('Quantos dias de atraso tem essa devolução? '));

    const multa = item.calcularMulta(diasAtraso);
    console.log(`Valor total a pagar: R$ ${multa.toFixed(2)}`);
    
  } finally {
    rl.close();
  }
}

iniciarSistema();