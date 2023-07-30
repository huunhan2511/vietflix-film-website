import React, { useState } from 'react';
import { EPISODES,MULTI_SELECT_GENRE,ACCESS_DENIED,TYPE_MOVIE, ADD_MOVIE_SUCCESS } from '../../constant';
import { useMutation, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import mutations from '../../mutations';
import Query from '../../query'
import axios from 'axios';
import { toast } from 'react-toastify';
import Loadingitem from '../LoadingItem';
import { MultiSelect } from "react-multi-select-component";
const listOptions = JSON.parse(localStorage.getItem("options")) || [];   
const AddMovie = () => {
    const navigate = useNavigate();
    const options= [];
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [dataFilm, setDataFilm] = useState({
        name : "",
        img : "",
        link_embed : "",
        link_m3u8 : "",
        description : "",
    })
    const [urlMovie, setUrlMovie] = useState('');
    const [dataEpisode, setDataEpisode] = useState({});
    const [time,setTime] = useState({});
    const [btnAddFilm, setBtnAddFilm] = useState(true);
    const [mutationAddEpisode] = useMutation(mutations.createEpisode,
        {onError : (error) => {
            if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
                localStorage.removeItem("token")
                navigate("/login-admin")
            }
            toast.error(error.graphQLErrors[0].message);
        },
        onCompleted : (response) =>{
            handleAddFilmDetail({
                episode: response.createEpisode.id,
                seasons: [],
                total_seasons: 0
            })
        }
    });
    const [mutationAddFilmDetail] = useMutation(mutations.createFilmDetail,
        {onError : (error) => {
            if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
                localStorage.removeItem("token")
                navigate("/login-admin")
            }
            toast.error(error.graphQLErrors[0].message);
        },
        onCompleted : (response) =>{ 
            var genre = []
            selectedOptions.forEach(option =>{
                genre.push(option.value);
            })
            handleAddFilm({
                description: dataFilm.description,
                filmType : TYPE_MOVIE,
                filmDetail: response.createFilmDetail.id,
                genres : genre,
                img : dataFilm.img,
                name: dataFilm.name
            })
        }
    });
    const [mutationAddFilm] = useMutation(mutations.createFilm,
        {onError : (error) => {
            if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
                localStorage.removeItem("token")
                navigate("/login-admin")
            }
            toast.error(error.graphQLErrors[0].message);
        },
        onCompleted : (response) =>{
            setDataFilm({});
            setUrlMovie('');
            setTime({hour: 0, minute: 0})
            setSelectedOptions([])
            toast.success(ADD_MOVIE_SUCCESS);
        }
    });
    const {loading} = useQuery(Query.qGenre,{onCompleted: (data)=>{
        data.genres.forEach(item => {
            options.push({
                value: item.id,
                label: item.name
            })
        });
        localStorage.setItem("options", JSON.stringify(options));
    }});
    
    const handleAddEpisode = (episode) =>{
        episode = {
            ...episode,
            time: time.hour+"h"+time.minute+"m"
        }
        mutationAddEpisode({
            variables: {input : episode},
            context: {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            }
        })
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
    const handleAddFilm = (film) =>{
        mutationAddFilm({
            variables: {input : film},
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
            if(Object.keys(res.data).length > 0){
                convertMinutesToHoursAndMinutes(res.data.movie.time === "" ? 0 : parseInt(res.data.movie.time.toLowerCase().replace('phút','')))
                setDataEpisode({
                    link_embed : res.data.episodes[res.data.episodes.length-1].server_data[res.data.episodes[res.data.episodes.length-1].server_data.length-1]['link_embed'],
                    link_m3u8 : res.data.episodes[res.data.episodes.length-1].server_data[res.data.episodes[res.data.episodes.length-1].server_data.length-1]['link_m3u8'],
                    name : res.data.movie.name,
                    time : Object.keys(time).length === 0 ? '0' : time.hour+"h"+time.minute+"m"
                });
                setDataFilm({
                    name : res.data.movie.name,
                    img : res.data.movie.poster_url,
                    link_embed : res.data.episodes[res.data.episodes.length-1].server_data[res.data.episodes[res.data.episodes.length-1].server_data.length-1]['link_embed'],
                    link_m3u8 : res.data.episodes[res.data.episodes.length-1].server_data[res.data.episodes[res.data.episodes.length-1].server_data.length-1]['link_m3u8'],
                    description : res.data.movie.content.replace(/<p>(.*?)<\/p>/g, '$1')
                })
            }
        }).catch(error =>{
            toast.error("Không tìm thấy thông tin phim")
        })
        document.getElementById('loader').classList.remove('active');


    }
    const onChangeInput = (e)=>{
        setUrlMovie(e.target.value);
    }
    const convertMinutesToHoursAndMinutes = (minutes) =>{
        if(minutes !== ""){
            setTime({
                hour: Math.floor(minutes / 60),
                minute: minutes % 60
            })
        }
    }
    const handleChangeInput = (event) => {
        setDataFilm({
            ...dataFilm,
            [event.target.name]: event.target.value
        })
    }
    const handleChangeTime = (event) => {
        setTime({
            ...time,
            [event.target.name]: event.target.value
        })
        if(event.target.name === "minute" && event.target.value > 59){
            setTime({
                ...time,
                minute: 59
            })
        }
    }
    const handleChangeGenre = (selected) =>{
        setSelectedOptions(selected)
        if(selectedOptions.length !== 0){
            setBtnAddFilm(false);
        }
    }
    if(loading) return <Loadingitem/>
    return (
        <div className='movie p-5'>
            <div>
                <div className='text-white text-xl mb-5'>Nhập đường dẫn phim</div>
                <div className='flex justify-between'>
                    <input 
                        onChange={onChangeInput} type='text' className='w-[88%] mr-2 border border-red-700 bg-[#191919] !focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-500 p-5 text-white'
                        value = {urlMovie}
                    ></input>
                    <button onClick={()=>handleGetInfoMovie()} className='text-white bg-red-700 rounded-md px-5 py-2 disabled:opacity-50' disabled={urlMovie === "" ? true : false }>Tìm thông tin phim</button>
                </div>
            </div>
            <div className='mt-5'>
                <div className='text-white text-xl mb-5'>Thông tin phim</div>
                <form>
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Tên phim</label>
                        <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name="name" value={
                                Object.keys(dataFilm).length === 0 ? '' : dataFilm.name
                        }
                        onChange={handleChangeInput}
                        />
                    </div>
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Thể loại</label>
                        <MultiSelect className='p-3 !bg-[#191919] border border-zinc-700 w-full'
                            options={listOptions}
                            value={selectedOptions}
                            onChange={handleChangeGenre}
                            overrideStrings = {MULTI_SELECT_GENRE}
                            />
                    </div>
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Link hình</label>
                        <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name="img" value={
                                Object.keys(dataFilm).length === 0 ? '' : dataFilm.img
                        }
                        onChange={handleChangeInput}
                        />
                    </div>
                    <div className='w-full flex'>
                        <label className='w-44 p-[1.20rem] bg-red-700'>Thời lượng</label>
                        <div className='flex w-[50%]'>
                            <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name="hour" value={
                                Object.keys(time).length === 0 ? 0 : time.hour
                            }
                            type="number"
                            min="0"
                            onChange={handleChangeTime}/>
                            <label className='w-28 p-5 bg-red-700'>giờ</label>
                        </div>
                        <div className='flex w-[50%]'>
                            <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name="minute" value={
                                Object.keys(time).length === 0 ? 0 : time.minute
                            }
                            type="number"
                            min="0"
                            max="60"
                            onChange={handleChangeTime}/>
                            <label className='w-28 p-5 bg-red-700'>phút</label>
                        </div>
                    </div>
                    {
                        Object.keys(EPISODES).map((item,key)=>{
                            return(
                            <div className='w-full flex' key={key}>
                                <label className='w-44 p-5 bg-red-700'>{item}</label>
                                <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name={item} value={
                                    Object.keys(dataFilm).length === 0 ? '' : dataFilm[item]
                                }
                                onChange={handleChangeInput}
                                />
                            </div>
                            )
                        })
                    }
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Nội dung phim</label>
                        <textarea className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name="description" value={
                                Object.keys(dataFilm).length === 0 ? '' : dataFilm.description
                        }
                        onChange={handleChangeInput}
                        />
                    </div>
                </form>
            </div>
            <div className='text-white flex justify-end mt-5'>
                <button className='px-10 py-4 bg-red-700 rounded-md disabled:opacity-50' 
                disabled={btnAddFilm} 
                onClick={()=>handleAddEpisode(dataEpisode)}>
                    Thêm phim
                </button>
            </div>
        </div>
    );
}

export default AddMovie;
