import React, { useState } from 'react';
import { episodes } from '../../constant';
import { useMutation, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import mutations from '../../mutations';
import Query from '../../query'
import axios from 'axios';
import { toast } from 'react-toastify';
import Loadingitem from '../LoadingItem';
import { MultiSelect } from "react-multi-select-component";
const listOptions = JSON.parse(localStorage.getItem("options"));   
const DrawMovie = () => {
    const navigate = useNavigate();
    const options= [];
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [mutationAddEpisode] = useMutation(mutations.createEpíode,
        {onError : () => {
            localStorage.removeItem("token")
            navigate("/login-admin")
        },
        onCompleted : (response) =>{
            handleAddFilmDetail(
                {
                    "episode" : response.createEpisode.id,
                    "seasons" : [],
                    "total_seasons": 0
                }
            )
        }
    });
    const [mutationAddFilmDetail] = useMutation(mutations.createFilmDetail,
        {onError : () => {
            localStorage.removeItem("token")
            navigate("/login-admin")
        },
        onCompleted : (response) =>{
            console.log(response)
        }
    });
    const {data,loading,error} = useQuery(Query.qGenre,{onCompleted: (data)=>{
        data.genres.forEach(item => {
            options.push({
                value: item.id,
                label: item.name
            })
            localStorage.setItem("options", JSON.stringify(options));
        });
    }});
    const [dataMovie,setDataMovie] = useState({});
    const [urlMovie, setUrlMovie] = useState('');
    const [dataEpisode, setDataEpisode] = useState({});
    
    const handleAddEpisode = (episode) =>{
        // mutationAddEpisode({
        //     variables: {input : episode},
        //     context: {
        //         headers: {
        //             authorization: localStorage.getItem("token"),
        //         },
        //     }
        // })
        console.log(selectedOptions)
    }
    const handleAddFilmDetail = (filmDetail)=>{
        mutationAddFilmDetail({
            variables: {input : filmDetail},
            context: {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            }
        })
    }
    const handleGetInfoMovie = async () =>{
        document.getElementById('loader').classList.add('active');
        await axios.get(urlMovie).then(res=>{
            toast.success('Tìm thông tin phim thành công');
            setDataMovie(res.data);
            if(Object.keys(res.data).length > 0){
                var temp = {
                    link_embed : res.data.episodes[res.data.episodes.length-1].server_data[res.data.episodes[res.data.episodes.length-1].server_data.length-1]['link_embed'],
                    link_m3u8 : res.data.episodes[res.data.episodes.length-1].server_data[res.data.episodes[res.data.episodes.length-1].server_data.length-1]['link_m3u8'],
                    name : res.data.movie.name,
                    time : res.data.movie.time.toLowerCase().replace('giờ','h').replace('phút','m')
                }
                console.log(temp)
                setDataEpisode(temp);
            }
        }).catch(error =>{
            toast.error("Không tìm thấy thông tin phim")
        })
        document.getElementById('loader').classList.remove('active');


    }
    const onChangeInput = (e)=>{
        setUrlMovie(e.target.value);
    }
    if(loading) return <Loadingitem/>
    return (
        <div className='p-5'>
            <div>
                <div className='text-white text-xl mb-10'>Nhập đường dẫn phim</div>
                <div className='flex justify-between'>
                    <input onChange={onChangeInput} type='text' className='w-[88%] mr-2 border border-red-700 bg-[#191919] !focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-500 p-5 text-white'></input>
                    <button onClick={()=>handleGetInfoMovie()} className='text-white bg-red-700 rounded-md px-5 py-2 disabled:opacity-50' disabled={urlMovie === "" ? true : false }>Tìm thông tin phim</button>
                </div>
            </div>
            <div className='mt-10'>
                <form>
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Tên phim</label>
                        <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' value={
                                Object.keys(dataMovie).length === 0 ? '' : dataMovie.movie.name
                        }/>
                    </div>
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Link hình</label>
                        <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' value={
                                Object.keys(dataMovie).length === 0 ? '' : dataMovie.movie.thumb_url
                        }/>
                    </div>
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Thời lượng</label>
                        <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' value={
                            Object.keys(dataMovie).length === 0 ? '' : dataMovie.movie.time.toLowerCase().replace('giờ','h').replace('phút','m')
                        }/>
                    </div>
                    {
                        Object.keys(episodes).map((item,key)=>{
                            return(
                            <div className='w-full flex' key={key}>
                                <label className='w-44 p-5 bg-red-700'>{item}</label>
                                <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' value={
                                    Object.keys(dataMovie).length === 0 ? '' : dataMovie.episodes[dataMovie.episodes.length-1].server_data[dataMovie.episodes[dataMovie.episodes.length-1].server_data.length-1][item]
                                }/>
                            </div>
                            )
                        })
                    }
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Thể loại</label>
                        <MultiSelect className='p-5 !bg-[#191919] border border-zinc-700 w-full'
                            options={listOptions}
                            value={selectedOptions}
                            onChange={setSelectedOptions}
                            />
                    </div>
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Nội dung phim</label>
                        <textarea className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' value={
                                Object.keys(dataMovie).length === 0 ? '' : dataMovie.movie.content.replace(/[<p></p>]/g, '')
                        }/>
                    </div>
                </form>
            </div>
            <div className='text-white flex justify-end mt-5'>
                <button className='px-10 py-4 bg-red-700 rounded-md disabled:opacity-50' 
                disabled={Object.keys(dataMovie).length === 0 ? true : false} 
                onClick={()=>handleAddEpisode(dataEpisode)}>
                    Thêm phim
                </button>
            </div>
        </div>
    );
}

export default DrawMovie;
