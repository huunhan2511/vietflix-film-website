import React from 'react'
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPlayer from "react-player";
import {useLocation, useNavigate} from "react-router-dom";
export default function WatchPage() {
  const location = useLocation();
  console.log(location.state.filmId)
  let navigate = useNavigate();
  const previPage = () =>{
    navigate(-1)
    localStorage.setItem('isOpen',true);
    localStorage.setItem('filmId',location.state.filmId);
  }
  return (
    <div className="WatchPage min-h-screen mx-auto content-between bg-black" >
      <div className='relative'>
        <div className="fixed px-6 min-w-full backdrop-blur shadow h-[7%] flex items-center justify-between">
          <div>
            <span className='text-neutral-400 text-[200%] font-semibold' >The amazing spider man</span>
          </div>
          <div className='text-xl rounded-full bg-zinc-700 px-2' onClick={previPage}>
            <FontAwesomeIcon icon={faXmark} inverse />
          </div>
        </div>
      </div>
      <div className="min-h-screen pt-[3%]"> 
        <div className='player-wrapper'> 
        <ReactPlayer
            className="react-player"
            playing={true}
            url="https://kd.hd-bophim.com/20220411/7147_52987229/index.m3u8"
            controls
            width="100%"
            height="90vh"
          />
        </div>
      </div>
    </div>
  )
}
