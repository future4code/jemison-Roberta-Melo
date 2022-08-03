import React, {useState, useEffect} from "react";
import axios from "axios";


const TelaMatch = () => {

    const [match, setMatch] = useState([])

    //função para pegar um perfil
    const getMatch = () => {
        axios
        .get(
            `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches`,
            {
                headers: {
                    Authorization: ""
                }
            }
            )
        .then((res) => setMatch(res.data.matches))
        .catch((err) => {console.log(err)})
    }
   

    const clearMatches = () => {
        const URL = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear`
       
        const body = {
            id: match.id
        }

        const headers = {
            headers : {
                Authorization: ""
            }
        }
        axios
        .put(URL, body, headers) 
        .then((res) => {console.log(res.data)})
        .catch((err) => {console.log(err)})
    }

    useEffect (() => {
        getMatch()
    }, [])

    return(
        <>
           
        </>
    )
}

export default TelaMatch;