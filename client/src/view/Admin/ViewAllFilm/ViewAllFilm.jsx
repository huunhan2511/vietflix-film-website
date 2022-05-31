import React from 'react'
import  adminQuery from '../AdminQuery'
import { useQuery } from "@apollo/client"
import Loading from '../../../components/Loading';

export default function ViewAllFilm({filmId}){
    const {data,loading} = useQuery(adminQuery.qGetDetailFilm,{variables:{filmId}});
    if(loading) return <Loading/>
    return (
      <>
        <div
          style={{ backgroundColor: "#141414" }}
          className="min-h-screen flex justify-center"
        >
          <div
            style={{ backgroundColor: "#191919" }}
            className="w-full m-8 rounded-xl"
          >
            <div className="header-content-admin">
              Chi tiết phim {data.film.name}
            </div>
            <div className="flex justify-between mt-6 mx-6">
                <div className="bg-green-600 w-[35%] h-fit flex flex-col">
                    <img src={data.film.img} alt="imgFilm" />
                    <span className="font-bold text-lg text-center m-4">
                        {data.film.name}
                    </span>
                </div>
                <div className="bg-orange-600 w-[65%] h-fit pl-8">
                    <div>Tên phim: {data.film.name}</div>
                    <div>Mô tả: {data.film.description}</div>
                    <div>Film type: {data.film.filmType.name}</div>
                    <div>Thể loại: 
                    {data.film.genres.map((genre,key)=>{
                        return (
                            <span> {genre.name}, </span>
                        )
                    })}
                    <div>seasons:
                        <div>Tên mùa: 
                            {data.film.filmDetail.seasons.map((season, key)=>{
                                return (
                                    <div> {season.name}
                                        <div> Số tập: 
                                            {season.total_episodes}
                                            <div>
                                                {season.episodes.map((episode, key)=>{
                                                    return (
                                                        <>
                                                            <div> Tên tập:
                                                                {episode.name}
                                                            </div>
                                                            <div> Thời gian:
                                                                {episode.time}</div>
                                                            <div> Đường dẫn embed:
                                                                {episode.link_embed}</div>
                                                            <div> Đường dẫn m3u8:
                                                                {episode.link_m3u8}</div>
                                                        </>
                                                    )
                                                })}                                   
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
                
            </div>
          </div>
        </div>
      </>
    );
}