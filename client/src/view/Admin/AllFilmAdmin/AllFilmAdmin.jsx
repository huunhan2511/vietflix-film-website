import React from 'react'
import { useRef, useState } from 'react'
import { useQuery } from "@apollo/client";
import { Table, Tag, Space, Input, Button } from 'antd'
// import Highlighter from 'react-highlight-words'
import { SearchOutlined } from '@ant-design/icons'
import  adminQuery from '../AdminQuery'
import Loading from '../../../components/Loading'
import { useNavigate } from 'react-router-dom';

export function AllFilmAdmin() {
  const cardFilm = useQuery(adminQuery.qGetAllFilm);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const navigate = useNavigate();

  const handleViewClick = (filmId,record)=> {
    localStorage.setItem("name",record.name); 
    navigate(`/admin/tat-ca-phim/${filmId}`, {state:{filmId:filmId}})
  }
  
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters, selectedKeys, confirm, dataIndex) => {
    clearFilters();
    setSearchText("");
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };


  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() =>
              clearFilters &&
              handleReset(clearFilters, selectedKeys, confirm, dataIndex)
            }
            size="small"
            style={{
              width: 90,
            }}
          > 
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });

  if (cardFilm.loading || cardFilm.error) {
    return <Loading/>
  }
  else {
    
  }
  const columns = [
    {
      title: "Hình",
      dataIndex: "img",
      key: "img",
      align: "center",
      width: "15%",
      render: (text, record) => {
        return (
          <div>
            <img
              className='!m-auto'
              src={text}
              style={{ width: "50%", height: "50%", margin: "0" }}
              alt=""
            ></img>
          </div>
        );
      },
    },
    {
      title: "Tên phim",
      dataIndex: "name",
      key: "name",
      align: "left",
      width: "24%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Thể loại",
      key: "genres",
      dataIndex: "genres",
      align: "center",
      width: "13%",
      render: (genres) => (
        <>
          {genres.map((genre) => {
            return (
              <Tag color={"magenta"} key={genre.name}>
                {genre.name}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Loại phim",
      dataIndex: "filmType",
      key: "filmType",
      align: "center",
      width: "8%",
      render: (text, record) => {
        return (
          <div>
            <span>{text.name}</span>
          </div>
        );
      },
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
            onClick={()=>handleViewClick(text,record)}
          >
            Xem
          </button>
          <button className="btn-admin !bg-yellow-600 !mt-0">Sửa</button>
          <button className="btn-admin !bg-red-600 !mt-0">Xóa</button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div style={{backgroundColor: '#141414'}} className='min-h-screen flex justify-center'>
        <div style={{backgroundColor: '#191919'}} className='w-full m-8 rounded-xl'>
          <div className='header-content-admin'>Danh sách tất cả phim</div>
          <div className='m-4 h-auto'>
            <Table columns={columns} dataSource={cardFilm.data.films} pagination={{ pageSize: 9}}/>
          </div>
        </div>
      </div>
    </>
  )
}
