import React from 'react';
import Loading from '../../../components/Loading'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import adminQuery from "../AdminQuery";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from "antd"
import { useNavigate } from 'react-router-dom';

export default function EditEpisode() {
    const navigate = useNavigate();
    const episodeId = useParams();
    const previPage = () => {
        navigate(-1)
    }

    const {data,loading } = useQuery(adminQuery.qEpisode, {variables:{episodeId: episodeId.id}})
    if (loading) return <Loading/>

    return (
        <>
      <div
          style={{ backgroundColor: "#141414" }}
          className="min-h-screen flex justify-center"
        >
          <div
            style={{ backgroundColor: "#191919" }}
            className="w-full h-fit m-8 rounded-xl"
          >
            <div className="header-content-admin flex gap-4">
              <span className="px-2 cursor-pointer" onClick={previPage} ><FontAwesomeIcon icon={faArrowLeft}/></span>
              Chi tiết tập của phim {localStorage.getItem('name')}
            </div>
            <div className="m-6">
              <div className='font-bold text-lg'>Tên tập:</div>
              <Input className='!mb-4 !mt-2' placeholder={data.episode.name} disabled size="large"></Input>
              <div className='font-bold text-lg'>Thời lượng tập:</div>
              <Input className='!mb-4 !mt-2' placeholder={data.episode.time} disabled size="large"></Input>
              <div className='font-bold text-lg'>EMBED:</div>
              <Input className='!mb-4 !mt-2' placeholder={data.episode.link_embed} disabled size="large"></Input>
              <div className='font-bold text-lg'>M3U8:</div>
              <Input className='!mb-4 !mt-2' placeholder={data.episode.link_m3u8} disabled size="large"></Input>
            </div>
          </div>
        </div>
    </>
    )
}

