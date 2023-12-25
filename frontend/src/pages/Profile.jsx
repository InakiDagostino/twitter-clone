import { useEffect } from "react"
import { useParams } from 'react-router-dom'

export function Profile(){

    let { userName } = useParams();

    return(
        <>
        <main id="header-home">
            <h1 id="title-home">Hola a perfil de usuario {userName} de twitter 2</h1>
        </main>
            
        </>
    )
}