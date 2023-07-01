import React, { useState } from 'react';
import { episodes } from '../../constant';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import mutations from '../../mutations';
import axios from 'axios';
const DrawMovie = () => {
    const navigate = useNavigate();
    const [mutationAddEpisode] = useMutation(mutations.createEpíode,
        {onError : () => {
            localStorage.removeItem("token")
            navigate("/login-admin")
        },
        onCompleted : () =>{
        }
    });
        
    const [dataMovie,setDataMovie] = useState({});
    const [urlMovie, setUrlMovie] = useState('');
    const handleGetInfoMovie = () =>{
        axios.get(urlMovie).then(res=>{
            setDataMovie(res.data);
        })
    }
    const onChangeInput = (e)=>{
        setUrlMovie(e.target.value);
    }
    return (
        <div className='p-5'>
            <div>
                <div className='text-white text-xl mb-10'>Nhập đường dẫn phim</div>
                <div className='flex justify-between'>
                    <input onChange={onChangeInput} type='text' className='w-[88%] border border-red-700 bg-[#191919] !focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-500 p-5 text-white'></input>
                    <button onClick={()=>handleGetInfoMovie()} className='text-white bg-red-700 rounded-md px-5 py-2'>Tìm thông tin phim</button>
                </div>
            </div>
            <div className='mt-10'>
                <form>
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Tên phim</label>
                        <input disabled className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' value={
                                Object.keys(dataMovie).length === 0 ? '' : dataMovie.movie.name
                        }/>
                    </div>
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Link hình</label>
                        <input disabled className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' value={
                                Object.keys(dataMovie).length === 0 ? '' : dataMovie.movie.thumb_url
                        }/>
                    </div>
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Thời lượng</label>
                        <input disabled className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' value={
                            Object.keys(dataMovie).length === 0 ? '' : dataMovie.movie.time.toLowerCase().replace('giờ','h').replace('phút','m')
                        }/>
                    </div>
                    {
                        Object.keys(episodes).map((item,key)=>{
                            return(
                            <div className='w-full flex' key={key}>
                                <label className='w-44 p-5 bg-red-700'>{item}</label>
                                <input disabled className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' value={
                                    Object.keys(dataMovie).length === 0 ? '' : dataMovie.episodes[dataMovie.episodes.length-1].server_data[dataMovie.episodes[dataMovie.episodes.length-1].server_data.length-1][item]
                                }/>
                            </div>
                            )
                        })
                    }
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Nội dung phim</label>
                        <textarea disabled className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' value={
                                Object.keys(dataMovie).length === 0 ? '' : dataMovie.movie.content.replace(/[<p></p>]/g, '')
                        }/>
                    </div>
                </form>
            </div>
            <div className='text-white flex justify-end mt-5'>
                <button className='px-10 py-4 bg-red-700 rounded-md'>Thêm phim</button>
            </div>
        </div>
    );
}

export default DrawMovie;
