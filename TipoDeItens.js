import  { ItemBase } from "./ItemBase.js";

export class LivroFisico extends ItemBase {
    constructor(titulo, autor, anoPublicacao, corredor) {
        super(titulo, autor, anoPublicacao);
        this.corredor = corredor;
    }

    calcularMulta(diasAtraso) {
        let multa = diasAtraso * 2.5; 
        console.log(`A multa de R$ ${multa.toFixed(2)} é aplicada para um livro físico.`);
        return multa;
    }
}

export class Ebook extends ItemBase {
    constructor(titulo, autor, anoPublicacao, formatoArquivo) {
        super(titulo, autor, anoPublicacao);
        this.formatoArquivo = formatoArquivo;
    }

    calcularMulta(diasAtraso) {
        console.log(`[SISTEMA] Arquivo Bloqueado. Acesso revogado no dispositivo do leitor.`);
        return 0.00;
    }
}