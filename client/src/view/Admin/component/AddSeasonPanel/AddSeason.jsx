import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'antd'
export function AddSeason() {
  const [seasons, setSeason] = React.useState()
  const navigate = useNavigate()
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
        }
    ]
    const AddSeason = () =>{
        navigate("them-mua")
    }
    return (
        <>
            <div style={{backgroundColor: '#191919'}} className='w-full h-fit mt-4 mr-4 rounded-xl py-3'>
                <div className='grid grid-flow-col justify-between place-items-center px-3 '>
                    <span className='header-content-admin '>Thêm mùa TvShow</span>
                    <div className='w-40 px-5 h-12'>
                        <button className='bg-[#DC2626] rounded-md font-semibold !w-full !min-h-full' onClick={AddSeason}>Thêm mùa</button>
                    </div>
                </div>
                <div className='px-5'>
                    <Table columns={defaultColumns} dataSource={seasons} pagination={{ pageSize: 9}}/>
                </div>
            </div>
        </>
    )
}