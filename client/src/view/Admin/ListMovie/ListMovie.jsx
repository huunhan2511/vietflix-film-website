import React from 'react'
import {useQuery} from '@apollo/client'
import adminQuery from "../AdminQuery";
import Loading from "../../../components/Loading";
import TableFilm from '../../../components/TableFilm';

export function ListMoive() {
  const filmTypeId = "626fe94b6bd3447a657b4a62";
  const {data,loading,error} = useQuery(adminQuery.qGetFilmsByFilmType,
      {variables: {filmTypeId},fetchPolicy: "cache-and-network"}
    );
  if (loading || error) {
    return <Loading />;
  }
  return(
    <>
      <TableFilm data={data.filmType.films} title="Danh sách phim lẻ"/>
    </>
  )
}
