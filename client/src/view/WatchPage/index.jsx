import React from 'react'
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useLocation, useNavigate} from "react-router-dom";
import Query from '../../query';
import { useQuery } from '@apollo/client';
import PlayerMovie from '../../components/PlayerMovie';
import Loading from '../../components/Loading';
export default function WatchPage() {
  const location = useLocation();
  let navigate = useNavigate();
  const previPage = () => {
    navigate(-1)
    localStorage.setItem('isOpen',true);
    localStorage.setItem('filmId',location.state.filmId);
  }
  console.log(location.state.episode)
  let filmId = location.state.filmId;
  const {loading,error,data} = useQuery(Query.qGetFilm,{variables:{filmId}})
    if (loading) return <Loading/>
    if (error) {
        navigate('/error')
    }
  return (
    <div className="WatchPage min-h-screen mx-auto content-between bg-black" >
      <div className='relative'>
        <div className="fixed px-6 min-w-full backdrop-blur shadow h-[7%] flex items-center justify-between">
          <div>
            <span className='text-neutral-400 text-[200%] font-semibold' >
              {!location.state.nameEpisode ? data.film.name : location.state.nameEpisode}
            </span>
          </div>
          <div className='text-xl rounded-full bg-zinc-700 px-2' onClick={previPage}>
            <FontAwesomeIcon icon={faXmark} inverse />
          </div>
        </div>
      </div>
      <div className="min-h-screen pt-[10%] xl:pt-[3%]"> 
        <div className='player-wrapper'> 
          <PlayerMovie filmType={!location.state.nameEpisode ? data.film.filmType.name : null} filmId={filmId} episode={location.state.episode}/>
        </div>
      </div>
    </div>
  )
}
