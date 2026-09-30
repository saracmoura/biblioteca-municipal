export class Leitor {
#idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.definirIdade(idade);
    }

    get idade() { 
        return this.#idade; 
    }

    definirIdade(idade) {
    if (typeof idade !== "number" || Number.isNaN(idade)) {
        throw new Error("ERR_TIPO_IDADE_INVALIDO");
    }
    if (idade < 12) {
        throw new Error("ERR_LEITOR_MENOR_IDADE");
    }
        this.#idade = idade;
    }
}