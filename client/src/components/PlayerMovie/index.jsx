import { useQuery } from '@apollo/client';
import React from 'react'
import ReactPlayer from "react-player";
import { useNavigate } from 'react-router-dom';
import Query from '../../query';
import LoadingItem from "../LoadingItem";

export default function PlayerMoive({filmType,filmId,episode=null}) {
  const navigate = useNavigate();
  const dataFilm = useQuery(filmType === "Movie" ? Query.qGetMoive : Query.qGetTvShow,{variables:{filmId}})
  if (dataFilm.loading) return <LoadingItem/>
  if (dataFilm.error) {
    navigate("/error")
  }
  return (
    <>
    {episode ? 
        <div>
        <ReactPlayer
            className="react-player"
            playing={true}
            url= {episode}
            controls
            width="100%"
            height="90vh"
          />
        </div>
        :
        <div>
          <ReactPlayer
              className="react-player"
              playing={true}
              url= {filmType === "Movie" ? dataFilm.data.film.filmDetail.episode.link_m3u8 : dataFilm.data.film.filmDetail.seasons[0].episodes[0].link_m3u8}
              controls
              width="100%"
              height="90vh"
            />
        </div>
    }
    </>
  )
}
