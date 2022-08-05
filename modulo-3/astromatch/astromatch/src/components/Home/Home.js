import React, { useState, useEffect } from "react";

import axios from "axios";
import { Main, Image, Buttons } from "./styled";

const Home = () => {

    const [profile, setProfile] = useState({})

    const [escolherMatch, setEscolherMatch] = useState({})

    const getProfile = () => {
        axios
            .get(
                `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`,

            )
            .then((response) => setProfile(response.data.profile))
            .catch((error) => { console.log(error) })
    }

    const ChoosePerson = () => {

        const URL = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person`

        const body = {
            id: profile.name,
            choice: escolherMatch
        }

        const headers = {

        }

        axios
            .post(URL, body, headers)
            .then((response) => { setEscolherMatch(response.data.isMatch) })
    }

    //console.log(profile)
    //console.log(escolherMatch)


    useEffect(() => {
        getProfile()
    }, [escolherMatch])

    useEffect(() => {
        ChoosePerson()
    }, [escolherMatch])

    const onClickMatchValue = (e) => {
        setEscolherMatch(e.target.value)
    }

    return (
        <Main>
            <h1>Astromatch</h1>
            <hr />
            <Image src={profile.photo} alt={profile.name} />
            <h3>{profile.name}, {profile.age}</h3>
            <p>{profile.bio}</p>
            <Buttons>
                <button onClick={onClickMatchValue} value={false}>X</button>
                <button onClick={onClickMatchValue} value={true} >♥</button>
            </Buttons>
        </Main>
    )
}

export default Home;