import React, { useEffect, useState } from 'react';
import LayoutAdmin from '../../../components/LayoutAdmin';
import EditMovie from '../../../components/EditMovie';
import {useLocation, useNavigate} from "react-router-dom";
import { ACCESS_DENIED } from '../../../constant';
import { useQuery } from '@apollo/client';
import Query from '../../../query';
const EditMoviePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [idFilm,setIdFilm] = useState('');
    useEffect(()=>{
        if(location.state && location.state.idFilm){
            setIdFilm(location.state.idFilm)
        }else{
            navigate('/')
        }
    },[])
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
    return (
        <LayoutAdmin>
            <div className="flex justify-center min-h-screen bg-[#141414]">
                <div className="w-full m-8 rounded-xl bg-[#191919]">
                    <div className="header-content-admin text-white flex justify-between">
                        <div>Cập nhật thông tin phim</div>
                    </div>
                    <EditMovie filmId={idFilm}/>
                </div>
            </div>
        </LayoutAdmin>
    );
}

export default EditMoviePage;
