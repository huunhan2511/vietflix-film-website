import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form,Space } from 'antd';
import { useQuery } from "@apollo/client"
import { useNavigate } from 'react-router-dom';
import  adminQuery from '../../AdminQuery';
import LoadingItem from "../../../../components/LoadingItem";

export default function EpisodeTable ({seasonId,episodeId = null}) {
  const navigate = useNavigate();
  const {data, loading} = useQuery(episodeId !== null ? adminQuery.qEpisode : adminQuery.qSeason, episodeId !== null ? {variables: {episodeId}} : {variables: {seasonId}});
  const handleView = (seasonId) =>{
    if(episodeId === null ){
    navigate(`/admin/season/episode/${seasonId}`)
    }
    else{
      navigate(`/admin/episode/${seasonId}`)
    }
  }
  let defaultColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        editable: true,
      },
      {
        title: 'Time',
        dataIndex: 'time',
        editable: true,
      },
      {
        title: 'M3U8',
        dataIndex: 'link_m3u8',
        editable: true,
        ellipsis: true,
      },
      {
        title: 'Embed',
        dataIndex: 'link_embed',
        editable: true,
        ellipsis: true,
      },
      {
        title: "Chỉnh sửa",
        dataIndex :"id",
        key: "id",
        align: "center",
        width: "25%",
        render: (text, record) => (
          <Space size="middle">
            <button
              className="btn-admin !bg-green-600 !mt-0"
              onClick={()=>handleView(text)}
            >
              Xem
            </button>
            <button className="btn-admin !bg-yellow-600 !mt-0">Sửa</button>
            <button className="btn-admin !bg-red-600 !mt-0">Xóa</button>
          </Space>
        ),
      },
  ]
  if(loading) return <LoadingItem/>
  return (
    <>
      <Table columns={defaultColumns} dataSource={episodeId!== null ? [data.episode] : data.season.episodes} pagination={{ pageSize: 9}} />
    </>
  )
}
