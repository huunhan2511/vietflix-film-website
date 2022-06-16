import React from 'react'
import adminQuery from '../AdminQuery'
import { useQuery } from "@apollo/client"
import Loading from '../../../components/Loading';
import TableFilm from '../../../components/TableFilm';

export default function ViewFilmByCategory({genreId}) {
    const {data, loading} = useQuery(adminQuery.qGetFilmByGenreId,{variables:{genreId}, fetchPolicy: "cache-and-network"});
    if(loading) return <Loading />
    var title = "Danh sách phim "+data.genre.name
    return(
        <> 
            <TableFilm data={data.genre.films} title={title}/>
        </>
    )
}