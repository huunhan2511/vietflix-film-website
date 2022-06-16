import React from 'react'
import { LayoutAdmin } from '../../../components/LayoutAdmin'
import FilmByCategory from './ViewFilmByCategory'
import { useParams } from 'react-router-dom';
export default function ViewFilmByCategory() {
    const param =useParams();
    return(
        <>
            <LayoutAdmin childComponent={<FilmByCategory genreId={param.id}/>}/>
        </>
    )
}