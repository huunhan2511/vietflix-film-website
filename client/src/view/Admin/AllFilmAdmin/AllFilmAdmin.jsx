import React from 'react'
import { useQuery} from "@apollo/client";
import  adminQuery from '../AdminQuery'
import Loading from '../../../components/Loading'
import TableFilm from '../../../components/TableFilm';
export function AllFilmAdmin() {
  const {data,loading,error} = useQuery(adminQuery.qGetAllFilm,{etchPolicy : "cache-and-network"});
  if (loading || error) {
    return <Loading />;
  }
  return(
    <>
      <TableFilm data={data.films} title="Danh sách tất cả phim"/>
    </>
  )
}
