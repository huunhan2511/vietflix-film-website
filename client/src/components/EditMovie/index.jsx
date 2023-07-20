import React, { useState } from 'react';
import Query from '../../query'
import Loadingitem from '../LoadingItem';
import { EPISODES,MULTI_SELECT_GENRE } from '../../constant';
import { useQuery } from '@apollo/client';
import { MultiSelect } from "react-multi-select-component";
const listOptions = JSON.parse(localStorage.getItem("options")) || [];   

const EditMovie = ({filmId}) => {
    const options= [];
    const [selectedOptions, setSelectedOptions] = useState([]);
    const optionQuery = useQuery(Query.qGenre,{onCompleted: (data)=>{
        data.forEach(item => {
            options.push({
                value: item.id,
                label: item.name
            })
        });
        localStorage.setItem("options", JSON.stringify(options));
    }});
    const [film,setFilm] = useState({});
    const {data, loading} = useQuery(Query.qGetDetailFilmEdit,{variables:{filmId},onCompleted: (data)=>{
        setFilm(data.film)
        let temp = [];
        data.film.genres.forEach(item => {
            temp.push({
                value: item.id,
                label: item.name
            })
        })
        setSelectedOptions(temp)
    }});
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
                        />
                    </div>
                    <div className='w-full flex'>
                        <label className='w-44 p-[1.20rem] bg-red-700'>Thời lượng</label>
                        <div className='flex w-[50%]'>
                            {
                                Object.keys(film).length === 0
                                ?
                                <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name="hour"
                                type="number"
                                min="0"
                                />
                                :
                                <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name="hour"
                                type="number"
                                min="0"
                                value = {film.filmDetail.episode.time === "" ? 0 : film.filmDetail.episode.time.split("h")[0]}
                                />
                            }
                            <label className='w-28 p-5 bg-red-700'>giờ</label>
                        </div>
                        <div className='flex w-[50%]'>
                            {
                            Object.keys(film).length === 0
                            ?
                            <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name="minute" 
                            type="number"
                            min="0"
                            max="60"
                            />
                            :
                            <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name="minute" 
                            type="number"
                            min="0"
                            max="60"
                            value ={film.filmDetail.episode.time === "" ? 0 : film.filmDetail.episode.time.split("h")[1].replace("m", "")}
                            />
                            }
                            <label className='w-28 p-5 bg-red-700'>phút</label>
                        </div>
                    </div>
                    {
                        Object.keys(EPISODES).map((item,key)=>{
                            return(
                            <div className='w-full flex' key={key}>
                                <label className='w-44 p-5 bg-red-700'>{item}</label>
                                <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' 
                                value={ Object.keys(film).length === 0 ? "" : film.filmDetail.episode[item]}/>
                            </div>
                            )
                        })
                    }
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Nội dung phim</label>
                        <textarea className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' 
                        value={ Object.keys(film).length === 0 ? "" : film.description}/>
                    </div>
                </form>
            </div>
            <div className='text-white flex justify-end mt-5'>
                <button className='px-10 py-4 bg-red-700 rounded-md'>Cập nhật</button>
            </div>
        </div>
    );
}

export default EditMovie;
