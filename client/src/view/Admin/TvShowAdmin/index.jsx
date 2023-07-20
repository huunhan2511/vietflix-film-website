import React from 'react'
import LayoutAdmin from '../../../components/LayoutAdmin';
import { useQuery} from "@apollo/client";
import Loading from '../../../components/Loading'
import TableFilm from '../../../components/TableFilm';
import Query from '../../../query'
import { useNavigate } from 'react-router-dom';
import {TYPE_FILM} from '../../../constant';
export default function TvShowAdmin() {
  const navigate = useNavigate();
  const {data,loading,error} = useQuery(Query.qGetAllFilm,{etchPolicy : "cache-and-network"});
  if (loading || error) {
    return <Loading />;
  }
  const addTvShow = () =>{
    navigate('/admin/them-phim-le')
  }
  return (
    <LayoutAdmin>
      <TableFilm 
        data={data.films.filter(film=>film.filmType.name === TYPE_FILM.TVShow)} 
        title="Danh sách phim bộ"
        functionButton={addTvShow}
      />
    </LayoutAdmin>
  )
}
