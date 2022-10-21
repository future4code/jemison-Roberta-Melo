type Colaboradores = {
    nome: string,
    salário: number,
    setor: string,
    presencial: boolean,
}
enum SETOR{
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
}
type PessoaFinal = Colaboradores & {setor: SETOR}

const listaDeColaboradores: PessoaFinal[] = [
    
        { nome: "Marcos", salário: 2500, setor: SETOR.MARKETING, presencial: true },
        { nome: "Maria", salário: 1500, setor: SETOR.VENDAS, presencial: false},
        { nome: "Salete", salário: 2200, setor: SETOR.FINANCEIRO, presencial: true},
        { nome: "João", salário: 2800, setor: SETOR.MARKETING, presencial: false},
        { nome: "Josué", salário: 5500, setor:  SETOR.FINANCEIRO, presencial: true},
        { nome: "Natalia", salário: 4700, setor: SETOR.VENDAS, presencial: true},
        { nome: "Paola", salário: 3500, setor: SETOR.MARKETING, presencial: true }
    ]

    const separarColaboradoes = (pessoas: PessoaFinal[]) =>{
        return pessoas.filter((pessoa) =>{
            if(pessoa.setor === "marketing" && pessoa.presencial === true){
                return pessoas
            }
        })
    }
    console.log(separarColaboradoes(listaDeColaboradores))