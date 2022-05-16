import React from 'react'

import { useQuery } from '@apollo/client';
import Query from '../../../query';
import Loadingitem from '../../LoadingItem';

import {useNavigate} from "react-router-dom";
export default function SimilarFilm({genres}) {
    let navigate = useNavigate();
    const handleWatching = (filmId) =>{
        navigate(`/watch/${filmId}`,{state:{filmId:filmId}})
    }
    let genreId = genres[0].id;
    const dataFilm = useQuery(Query.qGetGenreId,{variables:{genreId}});
    if(dataFilm.loading) return <Loadingitem/>
    return (
        <div className='flex flex-col'>
                <div>
                    <span className='text-white text-[150%] font-bold '>Nội dung tương tự</span>
                </div>
                
                <div className='grid grid-col-1 xs:grid xs:grid-cols-2 lg:grid lg:grid-cols-3 xs:gap-x-2 xs:gap-y-3 lg:gap-x-3 lg:gap-y-5 mt-7 pb-5 cursor-pointer'>
                {
                    dataFilm.data.genre.films.map((film,key)=>{
                        return (
                            <div className='flex flex-col bg-zinc-800 h-96  xs:h-64 sm:h-96 lg:h-96' key={key} onClick={()=>handleWatching(film.id)}>
                                <div className='h-[40%]'>
                                    <img src={film.img} alt="background" className="h-full w-full" ></img>
                                </div>
                                <div className='h-[60%] py-2 px-4'>
                                    <span className='text-white'> {film.name}</span>
                                    <span className='text-gray-400'>{film.description}</span>
                                </div>
                            </div>   
                        );

                    })
                }  
                </div>
                
            </div>
    )
}
