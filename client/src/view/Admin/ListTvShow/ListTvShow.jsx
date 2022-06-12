import React from 'react'
import Loading from "../../../components/Loading";
import {useQuery} from '@apollo/client'
import adminQuery from "../AdminQuery";
import TableFilm from '../../../components/TableFilm';

export function ListTvShow() {
  const filmTypeId = "6270979651e4036f47581774";
  const {data,loading,error} = useQuery(adminQuery.qGetFilmsByFilmType,
    {variables: {filmTypeId} }
  );
  if (loading || error) {
    return <Loading />;
  }
  console.log(data.filmType.films)
  return(
    <TableFilm data={data.filmType.films} title="Danh sách phim bộ"/>
  )
}
