import { useQuery} from '@apollo/client';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Query from '../../../query';
import LoadingItem from "../../LoadingItem";

export default function Episode({filmId,img,seasons}) {
    const navigate = useNavigate();
    let seasonId = seasons[0].id;
    const {loading,data,refetch} = useQuery(Query.qGetSeason,{variables:{seasonId}});
    const handleWatching = (episode,name) =>{
        navigate(`/watch/${filmId}`,{state:{episode:episode,nameEpisode:name,filmId:filmId}})
    }
    if(loading) return <LoadingItem/>
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row gap-2 md:gap- md:grid md:grid-cols-2 justify-between'>
                <span className='text-white text-[100%] md:text-[150%] font-bold '>Tập</span>
                {seasons.length === 1 
                    ? 
                    <span className='text-white text-[100%]  md:text-[150%] font-bold place-self-end '>
                        <p className='text-ellipsis'>
                        {seasons[0].name}
                        </p>
                    </span>
                    :
                    <div className = 'select-season'>
                        <select className='bg-neutral-900 text-white px-5 py-2 xs:px-5 xs:py-2 float-right' name="seasonId" 
                                onChange={(event)=>refetch({seasonId:event.target.value})}>
                        {seasons.map((season,key)=>{
                            return (
                                    <option className='bg-neutral-900 text-white' key={key} value={season.id} >{season.name}</option>
                            )
                        })}
                        </select>
                    </div>
                }
            </div>
            <div className='mt-7'>
                {
                    data.season.episodes.map((episode,key)=>{
                        return(
                            <div key={key} onClick={()=>handleWatching(episode.link_m3u8,episode.name)}>
                                <div className='flex text-gray-400 px-2 xs:px-10 h-24 xs:h-28 md:h-40 gap-4 cursor-pointer hover:bg-zinc-800'>
                                    <div className='flex-initial w-[5%] '>
                                    <div className='grid grid-cols-1 place-content-center h-full'>
                                            <span className='text[100%] xs:text-[250%] font-semibold'>{key+1}</span>
                                        </div>
                                    </div>
                                    <div className='flex-initial w-[25%]'>
                                        <img src={img} alt="background" className="h-full w-full py-4 sm:py-5" ></img>
                                    </div>
                                    <div className='flex-initial w-[70%]'>
                                        <div className='grid grid-cols-1 place-content-center h-full'>
                                            <span className='text-xs sm:text-base xs:text-xs'>
                                                {episode.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-1 place-content-center h-full'>
                                        <span>
                                            {episode.time}
                                        </span>
                                    </div>
                                </div>
                                <hr className='w-full'/>
                            </div>
                        )
                    })
                }
            
            </div>
        </div>
  )
}
