import React from 'react'
import { Table, Tag, Space } from 'antd'
import imageFilm from '../../../img/320x150_black.png'

export function ListTvShow() {
  const columns = [
    {
      title: 'Tên phim',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      width: '25%',
      color: '#8c8c8c',
      render:(text, record) => {
        return (
          <div>
            <img src={require('../../../img/320x150_black.png')} style={{ width: '320px', height: '150px', margin: '0'}} alt='imageFilm'></img>
            <span>{text}</span>
          </div>
        )
      }
    },
    {
      title: 'Thời lượng',
      dataIndex: 'time',
      key: 'time',
      align: 'center',
      width: '7%'
    },
    {
      title: 'Năm phát hành',
      dataIndex: 'releaseYear',
      key: 'releaseYear',
      align: 'center',
      width: '9%'
    },
    {
      title: 'Mô tả',
      dataIndex: 'describe',
      key: 'describe',
      align: 'center',
      width: '29%'
    },
    {
      title: 'Thể loại',
      key: 'category',
      dataIndex: 'category',
      align: 'center',
      width: '15%',
      render: category => (
        <>
          {category.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Chỉnh sửa',
      key: 'action',
      align: 'center',
      width: '15%',
      render: (text, record) => (
        <Space size="middle">
          <p>View</p>
          <p>Edit</p>
          <p>Delete</p>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'Spider-Man: Far From Home',
      image: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '2',
      name: 'Spider-Man: Far From Home',
      image: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '3',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '4',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '5',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '6',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '7',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '8',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '9',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '10',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '11',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '12',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '13',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '14',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '15',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },{
      key: '16',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '17',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '18',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },{
      key: '19',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '20',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },
    {
      key: '21',
      name: 'Spider-Man: Far From Home',
      imageFilm: imageFilm,
      time: 180,
      releaseYear: 2022,
      describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: ['Action', 'Super Hero'],
    },

  ];

  return (
    <>
      <div style={{backgroundColor: '#141414'}} className='h-screen flex justify-center'>
        <div style={{backgroundColor: '#191919'}} className='w-full m-8 rounded-xl'>
          <div className='header-content-admin'>Danh sách phim bộ</div>
          <div className='m-4 h-auto'>
            <Table columns={columns} dataSource={data} scroll={{ y: 650}} pagination={{ pageSize: 9}}/>
          </div>
        </div>
      </div>
    </>
  )
}
