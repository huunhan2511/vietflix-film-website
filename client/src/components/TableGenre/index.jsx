import { useMutation } from '@apollo/client';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Query from '../../query';
import mutations from '../../mutations';
import { toast } from 'react-toastify';
import { ACCESS_DENIED,DELETE_GENRE_SUCCESS,WARNING_GENRE_NOT_CAN_DELETE } from '../../constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare,faTrashCan} from "@fortawesome/free-solid-svg-icons"


const TableGerne = ({data,title,functionButton}) => {
    const [genres,setGenres] = useState(data)
    const [genresFilter, setGenresFiler] = useState(data);
    const navigate = useNavigate();
    const handleEditGenre = (genreId) => {
        navigate(`/admin/sua-the-loai`,{state:{idGenre:genreId}})
    }
    const [mutationDeleteGenre] = useMutation(mutations.deleteGenre,{
        onError : (error) => {
            if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
                localStorage.removeItem("token")
                navigate("/login-admin")
            }
            toast.error(error.graphQLErrors[0].message);
        },
        onCompleted : (response) =>{
            toast.success(DELETE_GENRE_SUCCESS)
            setGenres(genres.filter((genre) =>{ return genre.id !== response.deleteGenre.id }))
            setGenresFiler(genres.filter((genre) =>{ return genre.id !== response.deleteGenre.id }))
        }
    })
    const handleDeleteGenre = (genreId) =>{
        const genre = genres.find(genreItem => {return genreItem.id === genreId})
        if(Object.keys(genre).length > 0){
            if(genre.films.length > 0){
                toast.warning(WARNING_GENRE_NOT_CAN_DELETE)
            }else{
                mutationDeleteGenre({
                    variables: {input : genreId},
                    context: {
                        headers: {
                            authorization: localStorage.getItem("token"),
                        },
                    }
                })
            }
        }
        
    }
    const handleSearchChange = (e) =>{
        const listGenre = genres;
        if(e.target.value === '') setGenresFiler(genres);
        setGenresFiler(listGenre.filter((genre)=>{
            return genre.name.toLowerCase().includes(e.target.value.toLowerCase())
        }))
    }
    return (
        <>
            <div
            style={{ backgroundColor: "#141414" }}
            className="flex justify-center min-h-screen"
            >
                <div
                    style={{ backgroundColor: "#191919" }}
                    className="w-full m-8 rounded-xl"
                >
                    <div className="header-content-admin text-white flex justify-between">
                    <div>{title}</div>
                    {
                        functionButton 
                        && 
                        <div>
                        <button 
                        className='button-add bg-red-700 px-5 py-2 rounded-xl text-xl' 
                        onClick={()=>functionButton()}>
                            Thêm thể loại
                        </button>
                        </div>
                    }
                    </div>
                    <div className='w-full flex px-5'>
                        <label className='w-32 p-5 bg-red-700'>Tìm kiếm</label>
                        <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' 
                        name = "search"
                        onChange={handleSearchChange}
                        />
                    </div>
                    <div className="m-4 max-h-[70vh] overflow-auto">
                    <table className='text-white min-w-full border-collapse border-slate-700 border'>
                        <thead className='bg-red-700 text-white w-100 sticky top-[-1px] z-50'>
                            <tr className='w-100'>
                                <th className='p-4'>ID</th>
                                <th>Thể loại</th>
                                <th>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                genresFilter.map((genre,key)=>{
                                    return (
                                        <tr key={key} className='text-white'>
                                            <td className='border-slate-700 border p-4'>{genre.id}</td>
                                            <td className='border-slate-700 border min-w-[25rem] max-w-[25rem] break-words p-4'>{genre.name}</td>
                                            <td className='grid grid-cols-2 place-items-center p-4 border-slate-700 border justify-center'>
                                                <button className='button-edit' onClick={()=>handleEditGenre(genre.id)}>
                                                    Sửa
                                                    <FontAwesomeIcon icon={faPenToSquare} className='px-1'/>
                                                </button>
                                                <button className='button-delete' onClick={()=>handleDeleteGenre(genre.id)}>
                                                    Xóa
                                                    <FontAwesomeIcon icon={faTrashCan} className='px-1'/>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableGerne;
