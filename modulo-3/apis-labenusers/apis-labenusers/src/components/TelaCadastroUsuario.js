import axios from "axios";
import React, { useEffect, useState } from "react";
import { ButtonAdd, ButtonDelete, Tela, FormUser, ListaUsuario } from "./styled";

function Users() {
    
    const [users, setUsers] = useState([]);
   
    const [inputNome, setInputNome] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    const handleInputNome = (e) => {
        setInputNome(e.target.value)
    }
    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }

    const allUsers = users.map((users, index) => {
        return (
            <ListaUsuario key={index}>
                {users.name}
            </ListaUsuario>
        )
    })

    useEffect(() => {
        getAllUsers()
    }, [])


    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const serviceHeaders = {
        headers: {
            Authorization: 'roberta-vieira-jemison'
        }
    }

    const getAllUsers = () => {
        axios.get(url, serviceHeaders)
            .then((response) => { setUsers(response.data) })
            .catch((error) => { console.log(error.response) })
    }

    const body = {
        "name": inputNome,
        "email": inputEmail
    }

    const postCreateUser = (e) => {
        e.preventDefault();

        axios.post(url, body, serviceHeaders)
            .then((response) => {
                alert("Usuário cadastrado com sucesso!")
                getAllUsers()
            }).catch((error) => {
                alert("Tente novamente :(")
            })

        setInputNome("")
        setInputEmail("")
    }

    const deleteUser = (e) => {
        e.preventDefault();

        const delUser = users.filter((users) => users.name === inputNome)

        axios.delete(url + "/" + delUser[0].id, serviceHeaders)
            .then((response) => {
                alert("Usuário deletado com sucesso!")
                getAllUsers();
            }).catch((error) => {
                alert("Algo deu errado. Tente novamente!")
            })

        setInputNome("")
    }

    return (
        <Tela>
            <ul>
                {allUsers}
            </ul>
            <FormUser>
                <input type="text"
                    placeholder="Digite o seu nome"
                    value={inputNome}
                    onChange={handleInputNome}
                />
                <input type="text"
                    placeholder="Digite o seu e-mail"
                    value={inputEmail}
                    onChange={handleInputEmail}
                />

                <ButtonAdd onClick={postCreateUser}>
                    Adicionar
                </ButtonAdd>
                <ButtonDelete onClick={deleteUser}>
                    Excluir
                </ButtonDelete>
            </FormUser>
        </Tela>
    )
}

export default Users;