import React from 'react'
import { LayoutAdmin } from '../../../components/LayoutAdmin'
import ViewAllFilm from './ViewAllFilm'
import { useParams } from 'react-router-dom';

export default function ViewAllFilmAdmin() {
    const param = useParams();
    return(
        <>
            <LayoutAdmin childComponent={<ViewAllFilm filmId={param.id}/>}/>
        </>
    )
}