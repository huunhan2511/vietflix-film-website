import React from 'react'
import { Input } from 'antd'

export function AddEpisode() {
    return (
        <>
            <div style={{backgroundColor: '#191919'}} className='w-full h-[50%] mb-4 mr-4 rounded-xl'>
                <div className='header-content-admin'>Thêm tập TvShow</div>
                <div className='flex flex-col items-center m-auto w-[90%]'>
                <Input placeholder='Tên tập phim' size='large'></Input>
                <Input placeholder='time' size='large' type={'date'}></Input>
                <Input placeholder='Đường dẫn (mp4) của phim' size='large'></Input>
                <Input placeholder='Đường dẫn (m3u8) của phim' size='large'></Input>
                <button className='btn-login bg-red-600'> Thêm tập </button>
                </div>
            </div>
        </>
    )
}