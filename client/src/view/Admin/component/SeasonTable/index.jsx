import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form,Space } from 'antd';
import { useQuery } from "@apollo/client"
import { useNavigate } from 'react-router-dom';
import  adminQuery from '../../AdminQuery';
import LoadingItem from "../../../../components/LoadingItem";

export default function EpisodeTable ({filmDetailId}) {
  const navigate = useNavigate();
  const {data, loading} = useQuery(adminQuery.qFilmDetail,{variables: {filmDetailId}});
  const handleView = (seasonId) =>{
    navigate(`/admin/season/${seasonId}`)
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
            <button className="btn-admin !bg-red-600 !mt-0">Xóa</button>
          </Space>
        ),
      },
  ]
  if(loading) return <LoadingItem/>
  return (
    <>
      <Table columns={defaultColumns} dataSource={data.filmDetail.seasons} pagination={{ pageSize: 9}}/>
    </>
  )
}
