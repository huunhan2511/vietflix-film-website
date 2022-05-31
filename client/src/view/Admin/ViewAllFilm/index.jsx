import React from 'react'
import { useParams } from 'react-router-dom'

export default function ViewAllFilm() {
    let id = useParams();
    return(
        <>
            <h1>Id: {id}</h1>
        </>
    )
}