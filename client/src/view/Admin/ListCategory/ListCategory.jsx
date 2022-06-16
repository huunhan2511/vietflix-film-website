import React from 'react'
import {Table, Space} from 'antd'
import { useQuery } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
import  adminQuery from '../AdminQuery'
import Loading from "../../../components/Loading";
export default function ListCategory() {
    const categories = useQuery(adminQuery.qGetAllCategories,{fetchPolicy : "cache-and-network"});
    const navigate = useNavigate();
    const handleViewClick = (categoryId, record) => {
      localStorage.setItem("name",record.name);
      navigate(`/admin/the-loai/${categoryId}`, {state:{categoryId: categoryId}})
    }
    const columns = [
      {
        title: "Tên thể loại",
        dataIndex: "name",
        align: "left",
        width: "75%",
      },
      {
        title: "Danh sách phim",
        dataIndex:"id",
        key: "id",
        align: "center",
        width: "25%",
        render: (text, record) => (
          <Space size="middle">
              <button 
                className="btn-admin !mt-0 !px-2 !py-2"
                onClick={()=>handleViewClick(text, record)}
              >
                Danh sách
              </button>
          </Space>
        ),
      },
    ];
    if (categories.loading || categories.error) {
        return <Loading />;
      }
    return(
        <>
          <div style={{backgroundColor: '#141414'}} className='h-screen flex justify-center'>
              <div style={{backgroundColor: '#191919'}} className='w-full m-8 rounded-xl'>
              <div className='header-content-admin'>Danh sách thể loại phim</div>
              <div className='m-4 h-auto'>
                  <Table columns={columns} dataSource={categories.data.genres} scroll={{ y: 650}} pagination={{ pageSize: 9}}/>
              </div>
              </div>
          </div>
        </>
    )
}