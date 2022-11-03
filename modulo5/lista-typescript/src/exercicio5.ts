type Usuarios = {
    name: string,
    email: string,
    role: string,
}

const listUsers: Usuarios[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const listAdm = (usuarios: Usuarios[]) =>{
    const admin = usuarios.filter((pessoas) =>{
        if(pessoas.role === "admin"){
            return pessoas
        }
    })
    const email = admin.map((pessoas) =>{
        return pessoas.email
    })

    return email
}
console.log(listAdm(listUsers))