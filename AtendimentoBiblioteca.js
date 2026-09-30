import { Leitor } from './Leitor.js';

export class AtendimentoBiblioteca {

    cadastrarNovoLeitor(nome, idade) {
        try {
            console.log(`\n[GUICHÊ BIBLIOTECA] Iniciando comunicação com o servidor...`);

            const leitor = new Leitor(nome, idade);
            console.log(` Sucesso! A carteirinha de ${leitor.nome} foi gerada.`);

        } catch (excecaoCapturada) {
            console.log(`[ERRO INTERCEPTADO] A carteirinha não pôde ser gerada.`);
            this.traduzirCodigoDeErro(excecaoCapturada.message);

        } finally {
            console.log("Operação de cadastro finalizada. Guichê liberado para o próximo usuário da fila.");
        }
    }
    cadastrarLivro(ClasseItem, titulo, autor, anoPublicacao, detalhe) {
    try {
        console.log(`\n[GUICHÊ BIBLIOTECA] Iniciando comunicação com o servidor...`);
        const item = new ClasseItem(titulo, autor, anoPublicacao, detalhe);
        console.log(` Sucesso! O item "${item.titulo}" foi cadastrado.`);
        return item;

    } catch (excecaoCapturada) {
        console.log(`[ERRO INTERCEPTADO] O item não pôde ser cadastrado.`);
        this.traduzirCodigoDeErro(excecaoCapturada.message);
        return null;

    } finally {
        console.log("Operação de cadastro finalizada. Guichê liberado para o próximo usuário da fila.");
    }
}

    traduzirCodigoDeErro(codigoDoErro) {
        switch (codigoDoErro) {
            case "ERR_TIPO_ANO_INVALIDO":
                console.log("Atenção: Os campos de ano de publicação e idade do leitor aceitam apenas caracteres numéricos.");
                break;

            case "ERR_ANO_FORA_DO_LIMITE":
                console.log("Aviso do sistema: O ano de publicação do catálogo deve estar situado entre 1000 e 2026.");
                break;

            case "ERR_LEITOR_MENOR_IDADE":
                console.log("Aviso do Sistema: Leitores menores de 12 anos necessitam da presença física de um responsável para a efetivação do cadastro");
                break;

            case "ERR_TIPO_IDADE_INVALIDO":
                console.log("Atenção: Os campos de ano de publicação e idade do leitor aceitam apenas caracteres numéricos.");
                break;

            default:
                console.log(`Serviço Indisponível: ${codigoDoErro}`);
        }
    }
}
