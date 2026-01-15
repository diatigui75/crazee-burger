import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginForm() {

    // États (state, données)
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()



    // Comportements

    const handleSubmit = (event) => {
        event.preventDefault()
        //  alert(`Bonjour, ${inputValue} `)
        setInputValue("")
        navigate(`/order/${inputValue}`)
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    // Affichage (render)

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1> <br />
            <h2>Connectez-vous</h2>
            <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre prénom..." required />
            <button type="submit">Accéder à votre espace</button>
        </form>
    )

}