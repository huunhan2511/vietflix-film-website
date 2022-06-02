import React from 'react'
import { Input } from 'antd'

export function AddEpisode() {
    return (
        <>
            <div style={{backgroundColor: '#191919'}} className='w-full h-fit mb-4 mr-4 rounded-xl'>
                <div className='header-content-admin'>Thêm tập TvShow</div>
                <div className='flex flex-col items-center m-auto w-[90%]'>
                <Input className="!mt-6" placeholder='Tên tập phim' size='large'></Input>
                <Input className="!mt-6" placeholder='time' size='large' type={'date'}></Input>
                <Input className="!mt-6" placeholder='Đường dẫn (mp4) của phim' size='large'></Input>
                <Input className="!mt-6" placeholder='Đường dẫn (m3u8) của phim' size='large'></Input>
                <button className='btn-admin mb-6'> Thêm tập </button>
                </div>
            </div>
        </>
    )
}