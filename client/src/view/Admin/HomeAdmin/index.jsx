import React from 'react'
import LayoutAdmin from '../../../components/LayoutAdmin';
import { useQuery} from "@apollo/client";
import Loading from '../../../components/Loading'
import TableFilm from '../../../components/TableFilm';
import Query from '../../../query'
export default function HomeAdmin() {
  const {data,loading,error} = useQuery(Query.qGetAllFilm,{fetchPolicy : "no-cache"});
  if (loading || error) {
    return <Loading />;
  }
  return (
    <LayoutAdmin>
      <TableFilm data={data.films} title="Danh sách tất cả phim"/>
    </LayoutAdmin>
  )
}
