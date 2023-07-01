import React from 'react';
import { episodes } from '../../constant';

const AddMovie = () => {
    return (
        <div className='p-5'>
            <div>
                <div className='text-white text-xl mb-10'>Nhập thông tin phim</div>
            </div>
            <div className='mt-10'>
                <form>
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Tên phim</label>
                        <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full'/>
                    </div>
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Link hình</label>
                        <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' />
                    </div>
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Thời lượng</label>
                        <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full'/>
                    </div>
                    {
                        Object.keys(episodes).map((item,key)=>{
                            return(
                            <div className='w-full flex' key={key}>
                                <label className='w-44 p-5 bg-red-700'>{item}</label>
                                <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full'/>
                            </div>
                            )
                        })
                    }
                    <div className='w-full flex'>
                        <label className='w-44 p-5 bg-red-700'>Nội dung phim</label>
                        <textarea className='p-5 text-white bg-[#191919] border border-zinc-700 w-full'/>
                    </div>
                </form>
            </div>
            <div className='text-white flex justify-end mt-5'>
                <button className='px-10 py-4 bg-red-700 rounded-md'>Thêm phim</button>
            </div>
        </div>
    );
}

export default AddMovie;
