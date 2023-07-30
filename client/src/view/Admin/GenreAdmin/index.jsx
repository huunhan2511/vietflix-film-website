import React from 'react'
import LayoutAdmin from '../../../components/LayoutAdmin';
import { useQuery} from "@apollo/client";
import Loading from '../../../components/Loading'
import Query from '../../../query'
import { useNavigate } from 'react-router-dom';
import TableGerne from '../../../components/TableGenre';
export default function MovieAdmin() {
    const navigate = useNavigate();
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
