import React from 'react'
import LayoutAdmin from '../../../components/LayoutAdmin';
import { useQuery} from "@apollo/client";
import Loading from '../../../components/Loading'
import TableFilm from '../../../components/TableFilm';
import Query from '../../../query'
import { useNavigate } from 'react-router-dom';
import { ACCESS_DENIED } from '../../../constant';
export default function HomeAdmin() {
  const navigate = useNavigate();
  const queryCheckToken = useQuery(Query.qCheckToken,{
    context: {
      headers: {
          authorization: localStorage.getItem("token"),
      },
    },
    onError : (error) => {
      if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
          localStorage.removeItem("token")
          navigate("/")
      }
    }
  })
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
