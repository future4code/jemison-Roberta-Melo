import React, { useState, useEffect } from "react";
import axios from "axios";



const TelaMatch = () => {

    const [match, setMatch] = useState([])


    const getMatches = () => {
        axios
            .get(
                `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches`,

            )
            .then((response) => setMatch(response.data.matches))
            .catch((error) => { console.log(error) })
    }


    const clearMatches = () => {
        const URL = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear`

        const body = {
            id: match.id
        }

        const headers = {

        }
        axios
            .put(URL, body, headers)
            .then((response) => { console.log(response.data) })
            .catch((error) => { console.log(error) })
    }

    useEffect(() => {
        getMatches()
    }, [])

    return (
       <>
       </>
    )
}

export default TelaMatch;