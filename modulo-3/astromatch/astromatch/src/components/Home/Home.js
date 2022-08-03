import React, {useState, useEffect} from "react";
import axios from "axios";


const Home = () => {

    const [profile, setProfile] = useState({})
    
    const [escolherMatch, setEscolherMatch] = useState({})

    const getProfile = () => {
        axios
        .get(
            `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`,
            {
                headers: {
                    Authorization: ""
                }
            }
            )
        .then((res) => setProfile(res.data.profile))
        .catch((err) => {console.log(err)})
    }

    const DaMatch = () => {

        const URL = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person`

        const body = {
            id: profile.name,
            choice: escolherMatch
        }

        const headers = {
            headers : {
                Authorization: ""
            }
        }

        axios
        .post(URL, body, headers) 
        .then((res) => {setEscolherMatch(res.data.eMatch)})
    }

    useEffect (() => {
        getProfile()
    }, [escolherMatch])

    useEffect (() => {
        DaMatch() 
    }, [escolherMatch])

    const onClickMatchValue = (e) => {
        setEscolherMatch(e.target.value)
    }

    return(
       <></>
    )
}

export default Home;