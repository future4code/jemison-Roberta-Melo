enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Informacao = {
    nome: string, 
    anoLancamento: number,
    genero: string,
    pontuacao?: number,
}

type InfoFilme = Informacao & {genero: GENERO}

const filmes = (nome: string, lancamento: number, pontuacao1?: number) =>{
    const novoFilme: InfoFilme = {
        nome: nome,
        anoLancamento: lancamento,
        genero: GENERO.DRAMA,
        pontuacao: pontuacao1
    }
    return novoFilme
}
console.log(filmes("Duna", 2022, 74))