import React,{useState,useEffect} from 'react';
import LayoutAdmin from '../../../components/LayoutAdmin';
import { ACCESS_DENIED,UPDATE_GENRE_SUCCESS } from '../../../constant';
import { useMutation,useQuery } from '@apollo/client';
import mutations from '../../../mutations';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {useLocation} from "react-router-dom";
import Query from '../../../query'
import Loadingitem from '../../../components/LoadingItem';

const EditGenrePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [genreId,setGenreId] = useState('');
    const [genre,setGenre] = useState({});
    useEffect(()=>{
        if(location.state && location.state.idGenre){
            setGenreId(location.state.idGenre)
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
    const {loading} = useQuery(Query.qGetGenreId,{fetchPolicy: "no-cache", variables:{genreId},onCompleted: (data)=>{
        setGenre({
            id: data.genre.id,
            name: data.genre.name
        })
    }})
    const [mutationUpdateGenre] = useMutation(mutations.updateGenre,{
        onError : (error) => {
            if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
                localStorage.removeItem("token")
                navigate("/login-admin")
            }
            toast.error(error.graphQLErrors[0].message);
        },
        onCompleted : (response) =>{
            toast.success(UPDATE_GENRE_SUCCESS)
        }
    })
    const handleChangeGenre = (e)=>{
        setGenre({...genre,name: e.target.value})
    }
    const handleUpdateGenre = () =>{
        mutationUpdateGenre({
            variables: {input : genre},
            context: {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            }
        })
    }
    if (loading) return <LayoutAdmin><Loadingitem/></LayoutAdmin>
    return (
        <LayoutAdmin>
            <div className="flex justify-center min-h-screen bg-[#141414]">
                <div className="w-full m-8 rounded-xl bg-[#191919]">
                    <div className="header-content-admin text-white flex justify-between">
                        <div>Sửa thể loại</div>
                    </div>
                    <div className='p-5'>
                        <form>
                            <div className='w-full flex'>
                                <label className='w-44 p-5 bg-red-700'>Tên thể loại</label>
                                <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name="name"
                                value = {genre.name}
                                onChange={handleChangeGenre}
                                />
                            </div>
                        </form>
                        <div className='text-white flex justify-end mt-5'>
                            <button className='px-10 py-4 bg-red-700 rounded-md disabled:opacity-50' 
                            disabled={genre.name === '' ? true : false}
                            onClick={()=>handleUpdateGenre()}
                            >
                                Sửa thể loại
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    );
};

export default EditGenrePage;
