import React from 'react'
import LayoutAdmin from '../../../components/LayoutAdmin';
import { useQuery} from "@apollo/client";
import Loading from '../../../components/Loading'
import Query from '../../../query'
import { useNavigate } from 'react-router-dom';
import TableGerne from '../../../components/TableGenre';
import { ACCESS_DENIED } from '../../../constant';
export default function MovieAdmin() {
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
    const {data,loading,error} = useQuery(Query.qGenre,{fetchPolicy : "no-cache"});
    if (loading || error) {
        return <Loading />;
    }
    const addGenre = () =>{
        navigate("/admin/them-the-loai")
    }
    
    return (
        <LayoutAdmin>
        <TableGerne 
            data={data.genres} 
            title="Danh sách thể loại"
            functionButton={addGenre}
        />
        </LayoutAdmin>
    )
}
