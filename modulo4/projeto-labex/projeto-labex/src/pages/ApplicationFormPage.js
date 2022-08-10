import React from 'react';


function ApplicationFormPage(){


	return (
        <div>
            <h1>Inscreva-se para viagem</h1>
            <form>
                <select
                    placeholder={"Escolha a Viagem"}
                    name={""}
                    defaultValue={""}
                    required
                >
                    <option value={""} disabled>Escolha a Viagem</option>
                </select>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    required
                />
                <input
                    placeholder={"Idade"}
                    type={"number"}
                    name={"age"}
                    required
                />
                <input
                    placeholder={""}
                    name={""}
                    required
                />
                <input
                    placeholder={"Profissão"}
                    name={"profession"}
                    required
                />
                <select
                    placeholder={"País"}
                    name={"country"}
                    defaultValue={""}
                    required
                >
                    <option value={""} disabled>País</option>
                </select>
            </form>
            <Buttons>
                <button onClick={}>Voltar</button>
                <button>Enviar</button>
            </Buttons>
        </div>
    )
}

export default ApplicationFormPage;