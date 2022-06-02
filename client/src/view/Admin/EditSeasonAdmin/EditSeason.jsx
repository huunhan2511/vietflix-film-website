import React from 'react'
import Loading from '../../../components/Loading'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import adminQuery from "../AdminQuery";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from "antd"
import { useNavigate } from 'react-router-dom';
import EpisodeTable from "../component/EpisodeTable"
export default function EditSeason() {
  const navigate = useNavigate();
  const seasonId = useParams();
  
  const previPage = () => {
    navigate(-1)
  }
  const {data,loading } = useQuery(adminQuery.qSeason, {variables:{seasonId: seasonId.id}})
  if (loading) return <Loading/>
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
            <div className="header-content-admin flex gap-4">
              <span className="px-2 cursor-pointer" onClick={previPage} ><FontAwesomeIcon icon={faArrowLeft}/></span>
              Chi tiết mùa của phim {localStorage.getItem('name')}
            </div>
            <div className="m-6">
              <div className='font-bold text-lg'>Tên mùa:</div>
              <Input className='!mb-4 !mt-2' placeholder={data.season.name} disabled size="large"></Input>
              <div className='font-bold text-lg'>Số lượng tập:</div>
              <Input className='!mb-4 !mt-2' placeholder={data.season.total_episodes} disabled size="large"></Input>
              <EpisodeTable seasonId = {seasonId.id} />
            </div>
              
          </div>
        </div>
    </>
  )
}
