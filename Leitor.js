export class Leitor {
#idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    get idade() { return this.#idade; }

    set idade(idade) {
        if (idade < 12) {
            console.log("[BLOQUEIO] Leitor menor de 12 anos precisa do responsável para o cadastro.");
            return;
        }
        this.#idade = idade;
    }
}