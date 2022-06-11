import React, { useState } from 'react';
import { Table, Space } from 'antd';
import { useMutation, useQuery } from "@apollo/client"
import { useNavigate } from 'react-router-dom';
import  adminQuery from '../../AdminQuery';
import LoadingItem from "../../../../components/LoadingItem";
import { openNotificationWithIcon } from '../../../../components/Notification';
import { ModalConfirmDelete } from '../../../../components/Modal';

export default function EpisodeTable ({filmDetailId}) {
  const navigate = useNavigate();
  const [seasons,setSeasons] = useState([])
  const {loading} = useQuery(adminQuery.qFilmDetail,{variables: {filmDetailId},onCompleted : data => setSeasons(data.filmDetail.seasons),fetchPolicy : "cache-and-network"});
  const [mutationDeleteSeason,{error}] = useMutation(adminQuery.mDeleteSeason) 
  const handleView = (seasonId) =>{
    navigate(`/admin/season/${seasonId}`)
  }
  const handleDelete = (id)=>{
    mutationDeleteSeason({
      variables: {
        deleteSeasonId : id
      },
      context: {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      },
    });
    if(error){
      localStorage.removeItem("token")
      navigate("/login-admin",{replace:true})
    }else{
      let newSeasons = seasons.filter(season => season.id !== id)
      setSeasons(newSeasons)
      openNotificationWithIcon("success","Xóa thành công","bottomRight");
    }
  }
  let defaultColumns = [
    {
        title: 'Tên mùa',
        dataIndex: 'name',
        width: '30%',
        editable: true,
      },
      {
        title: 'Tổng số tập',
        dataIndex: 'total_episodes',
        width: '10%'
      },
      {
        title: "Chỉnh sửa",
        dataIndex :"id",
        key: "id",
        align: "center",
        width: "15%",
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
              onClick={()=>ModalConfirmDelete(text,handleDelete,"Xác nhận muốn xóa mùa phim")}
            >Xóa</button>
          </Space>
        ),
      },
  ]
  if(loading) return <LoadingItem/>
  return (
    <>
      <Table columns={defaultColumns} dataSource={seasons} pagination={{ pageSize: 9}}/>
    </>
  )
}
