import React, { useState } from 'react';
import Query from '../../query'
import Loadingitem from '../LoadingItem';
import { EPISODES,MULTI_SELECT_GENRE,ACCESS_DENIED,TYPE_MOVIE,UPDATE_MOVIE_SUCCESS } from '../../constant';
import { useMutation, useQuery } from '@apollo/client';
import { MultiSelect } from "react-multi-select-component";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import mutations from '../../mutations';
const listOptions = JSON.parse(localStorage.getItem("options")) || [];   

const EditMovie = ({filmId}) => {
    const navigate = useNavigate();
    const options= [];
    const [film,setFilm] = useState({});
    const [time,setTime] = useState({ hour: 0, minute: 0 });
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [mutationUpdateEpisode] = useMutation(mutations.updateEpisode,
        {onError : (error) => {
            if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
                localStorage.removeItem("token")
                navigate("/login-admin")
            }
            toast.error(error.graphQLErrors[0].message);
        },
        onCompleted : (response) =>{
            handleUpdateFilmDetail(response.updateEpisode.id)
        }
    })
    const [mutationUpdateFilmDetail] = useMutation(mutations.updateFilmDetail,
        {onError : (error) => {
            if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
                localStorage.removeItem("token")
                navigate("/login-admin")
            }
            toast.error(error.graphQLErrors[0].message);
        },
        onCompleted : (response) =>{
            handleUpdateFilm(response.updateFilmDetail.id)
        }
    })
    const [mutationUpdateFilm] = useMutation(mutations.updateFilm,
        {onError : (error) => {
            if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
                localStorage.removeItem("token")
                navigate("/login-admin")
            }
            toast.error(error.graphQLErrors[0].message);
        },
        onCompleted : (response) =>{
            toast.success(UPDATE_MOVIE_SUCCESS);
        }
    })
    const optionQuery = useQuery(Query.qGenre,{onCompleted: (data)=>{
        data.genres.forEach(item => {
            options.push({
                value: item.id,
                label: item.name
            })
        });
        localStorage.setItem("options", JSON.stringify(options));
    }});
    const {loading} = useQuery(Query.qGetDetailFilmEdit,{fetchPolicy: "no-cache", variables:{filmId},onCompleted: (data)=>{
        setFilm(data.film)
        setTime(
            {
                hour: data.film.filmDetail.episode.time.split("h")[0],
                minute : data.film.filmDetail.episode.time.split("h")[1].replace("m", "")
            }
        )
        let temp = [];
        data.film.genres.forEach(item => {
            temp.push({
                value: item.id,
                label: item.name
            })
        })
        setSelectedOptions(temp)
    }});
    const handleChangeInput = (event) => {
        setFilm({
            ...film,
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
    const handleUpdateEpisode = () => {
        const episode = {
            id: film.filmDetail.episode.id,
            name: film.name,
            time: time.hour+"h"+time.minute+"m",
            link_embed: film.filmDetail.episode.link_embed,
            link_m3u8: film.filmDetail.episode.link_m3u8
        }
        mutationUpdateEpisode({
            variables: {input : episode},
            context: {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            }
        })
    }
    const handleUpdateFilmDetail = (episodeId) => {
        const filmDetail = {
            episode : episodeId,
            id: film.filmDetail.id,
            seasons: [],
            total_seasons : 0
        }
        mutationUpdateFilmDetail({
            variables: {input : filmDetail},
            context: {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            }
        })
    }
    const handleUpdateFilm = (filmDetailId) =>{
        const genres = []
        selectedOptions.forEach(option =>{
            genres.push(option.value)
        })
        const filmUpdate = {
            desciption: filmId.desciption,
            filmDetail: filmDetailId,
            filmType: TYPE_MOVIE,
            genres: genres,
            id: film.id,
            img: film.img,
            name: film.name,
        }
        mutationUpdateFilm({
            variables: {input : filmUpdate},
            context: {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            }
        })

    }
    if (loading) return <Loadingitem/>

    return (
        <div className='movie p-5'>
            <div>
                <div className='text-white text-xl mb-10'>Nhập thông tin phim</div>
            </div>
            <div className='mt-10'>
                <form>
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Tên phim</label>
                        <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' 
                        value={Object.keys(film).length === 0 ? "" : film.name}
                        name = "name"
                        onChange={handleChangeInput}
                        />
                    </div>
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Thể loại</label>
                        <MultiSelect className='p-3 !bg-[#191919] border border-zinc-700 w-full'
                            options={listOptions}
                            value={selectedOptions}
                            onChange={setSelectedOptions}
                            overrideStrings = {MULTI_SELECT_GENRE}
                            />
                    </div>
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Link hình</label>
                        <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' 
                        value={ Object.keys(film).length === 0 ? "" : film.img}
                        name = "img"
                        onChange={handleChangeInput}
                        />
                    </div>
                    <div className='w-full flex'>
                        <label className='w-44 p-[1.20rem] bg-red-700'>Thời lượng</label>
                        <div className='flex w-[50%]'>
                            <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name="hour"
                            type="number"
                            min="0"
                            value = {time.hour === 0 ? 0 : time.hour}
                            onChange={handleChangeTime}
                            />
                            <label className='w-28 p-5 bg-red-700'>giờ</label>
                        </div>
                        <div className='flex w-[50%]'>
                            <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name="minute" 
                            type="number"
                            min="0"
                            max="60"
                            value ={time.minute === 0 ? 0 : time.minute}
                            onChange={handleChangeTime}
                            />
                            <label className='w-28 p-5 bg-red-700'>phút</label>
                        </div>
                    </div>
                    {
                        Object.keys(EPISODES).map((item,key)=>{
                            return(
                            <div className='w-full flex' key={key}>
                                <label className='w-44 p-5 bg-red-700'>{item}</label>
                                <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' 
                                value={ Object.keys(film).length === 0 ? "" : film.filmDetail.episode[item]}
                                onChange={handleChangeInput}
                                />
                            </div>
                            )
                        })
                    }
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Nội dung phim</label>
                        <textarea className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' 
                        value={ Object.keys(film).length === 0 ? "" : film.description}
                        name = "description"
                        onChange={handleChangeInput}
                        />
                    </div>
                </form>
            </div>
            <div className='text-white flex justify-end mt-5'>
                <button className='px-10 py-4 bg-red-700 rounded-md' onClick={()=>handleUpdateEpisode()}>Cập nhật</button>
            </div>
        </div>
    );
}

export default EditMovie;
