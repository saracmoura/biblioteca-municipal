export class ItemBase {
#anoPublicacao;

    constructor(titulo, autor, anoPublicacao){
        if (new.target === ItemBase) {
            throw new Error("[ERRO] Não é permitido cadastrar um item genérico.");
        }
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }

    get anoPublicacao() { return this.#anoPublicacao; }

    set anoPublicacao(anoPublicacao) {
        if (anoPublicacao < 1000 || anoPublicacao > 2026) {
            console.log("[BLOQUEIO] Ano de publicação inválido.");
            return;
        }
        this.#anoPublicacao = anoPublicacao;
    }

    calcularMulta(diasAtraso) {
        throw new Error("[ERRO] A classe filha precisa implementar o método de cálculo de multa!");
    }
}   