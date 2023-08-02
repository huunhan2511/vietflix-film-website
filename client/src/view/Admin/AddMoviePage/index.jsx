import React from 'react';
import LayoutAdmin from '../../../components/LayoutAdmin';
import AddMovie from '../../../components/AddMovie';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Query from '../../../query'
import { ACCESS_DENIED } from '../../../constant';

const AddMoviePage = () => {
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
    return (
        <LayoutAdmin>
            <div className="flex justify-center min-h-screen bg-[#141414]">
                <div className="w-full m-8 rounded-xl bg-[#191919]">
                    <div className="header-content-admin text-white flex justify-between">
                        <div>Thêm phim lẻ</div>
                    </div>
                    <AddMovie/>
                </div>
            </div>
        </LayoutAdmin>
    );
}

export default AddMoviePage;
