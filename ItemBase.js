export class ItemBase {
    #anoPublicacao;

    constructor(titulo, autor, anoPublicacao) {
        if (new.target === ItemBase) {
            throw new Error("[ERRO] Não é permitido cadastrar um item genérico.");
        }
        this.titulo = titulo;
        this.autor = autor;
        this.definirAnoPublicacao(anoPublicacao);
    }

    get anoPublicacao() {
        return this.#anoPublicacao;
    }

    definirAnoPublicacao(ano) {
        if (typeof ano !== "number" || Number.isNaN(ano)) {
            throw new Error("ERR_TIPO_ANO_INVALIDO");
        }
        if (ano < 1000 || ano > 2026) {
            throw new Error("ERR_ANO_FORA_DO_LIMITE");
        }
        this.#anoPublicacao = ano;
    }

    calcularMulta(diasAtraso) {
        throw new Error("[ERRO] A classe filha precisa implementar o método de cálculo de multa!");
    }
}