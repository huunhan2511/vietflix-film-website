import React, { useState} from 'react';
import { Table, Space } from 'antd';
import { useMutation, useQuery } from "@apollo/client"
import { useNavigate } from 'react-router-dom';
import  adminQuery from '../../AdminQuery';
import LoadingItem from "../../../../components/LoadingItem";
import { openNotificationWithIcon } from '../../../../components/Notification';
import { ModalConfirmDelete } from '../../../../components/Modal';

export default function EpisodeTable ({seasonId,episodeId = null}) {
  const navigate = useNavigate();
  const [episode, setEpisode] = useState([])
  const {loading} = useQuery(episodeId !== null ? adminQuery.qEpisode : adminQuery.qSeason, 
                            episodeId !== null 
                            ? 
                            {variables: {episodeId},onCompleted :data => setEpisode([data.episode]),fetchPolicy : "cache-and-network"} 
                            : 
                            {variables: {seasonId},onCompleted :data => setEpisode(data.season.episodes),fetchPolicy : "cache-and-network"}
                            );
  const [mutationDeleteEpisode] = useMutation(adminQuery.mDeleteEpisode,
    {onError : () => {
      localStorage.removeItem("token")
      navigate("/login-admin")
      openNotificationWithIcon("error", "Từ chối truy cập","bottomRight");
    },
    onCompleted : data =>{
      let newEpisode = episode.filter(episode => episode.id !== data.deleteEpisode.id)
      setEpisode(newEpisode)
      openNotificationWithIcon("success","Xóa thành công","bottomRight");
    }
    });
  const handleDelete = (id)=>{
    mutationDeleteEpisode({
      variables: {
        deleteEpisodeId : id
      },
      context: {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      },
    });
  } 
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
            <button className="btn-admin !bg-red-600 !mt-0"
              onClick={()=>ModalConfirmDelete(text,handleDelete,"Xác nhận muốn xóa tập phim")}
            >Xóa</button>
          </Space>
        ),
      },
  ]
  if(loading) return <LoadingItem/>
  return (
    <>
      <Table columns={defaultColumns} dataSource={episode} pagination={{ pageSize: 9}} />
    </>
  )
}
