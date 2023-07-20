import React from 'react'
import LayoutAdmin from '../../../components/LayoutAdmin';
import { useQuery} from "@apollo/client";
import Loading from '../../../components/Loading'
import TableFilm from '../../../components/TableFilm';
import Query from '../../../query'
import {TYPE_FILM} from '../../../constant';
import { useNavigate } from 'react-router-dom';
export default function MovieAdmin() {
  const navigate = useNavigate();
  const {data,loading,error} = useQuery(Query.qGetAllFilm,{etchPolicy : "cache-and-network"});
  if (loading || error) {
    return <Loading />;
  }
  const addMovie = () =>{
    navigate('/admin/them-phim-le')
  }
  
  return (
    <LayoutAdmin>
      <TableFilm 
        data={data.films.filter(film=>film.filmType.name === TYPE_FILM.Movie)} 
        title="Danh sách phim lẻ"
        functionButton={addMovie}
      />
    </LayoutAdmin>
  )
}
