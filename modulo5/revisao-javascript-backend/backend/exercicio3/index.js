console.log("exercicio 3")

const contas = []

const login = (email, senha) => {
    if ((email) && (senha)) {
        contas.push({ email: email, password: senha })
    } else if ((email) === false) {
        console.log("e-mail inválido")
    } else if ((senha) === false) {
        console.log("senha deve possuir no mínimo 6 caracteres")
    } else {
        console.log("Parâmetros inválidos")
    }
}

login("astrodev@labenu.com", "abc123")
console.log(contas)