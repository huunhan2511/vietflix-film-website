import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
const MenuItemAdmin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem('token');
        navigate('/login-admin',{replace: true})  
    }
    return (
        <div className='min-h-screen bg-[#191919] w-full text-white flex flex-col justify-between py-5'>
        <div className='text-[200%] h-[10%]'>
            <span className="pl-[10%] float-left font-extrabold after:content-['.'] after:text-4xl after:text-[#c09244]">Vietflix</span>
        </div>
        <div className='h-full w-full'>
            <Link to="/admin" className='gap-5  cursor-pointer'>
                <div className={`font-bold p-5 pl-[10%] mx-2 my-3 hover:bg-[#B91c1c] ${location.pathname === '/admin' ? 'bg-[#B91c1c]' : ''}`}>
                        <span className='place-self-start'>Tất cả phim</span>
                </div>
            </Link>
            <Link to="/admin/phim-le" className='cursor-pointer'>
                <div className={` font-bold p-5 pl-[10%] mx-2 my-3 hover:bg-[#B91c1c] ${location.pathname === '/admin/phim-le' ? 'bg-[#B91c1c]' : ''}`}>
                        <span className='place-self-start '>Danh sách phim lẻ</span>
                </div>
            </Link>
            <Link to="/admin/phim-bo" className='cursor-pointer'>
                <div className={` font-bold p-5 pl-[10%] mx-2 my-3 hover:bg-[#B91c1c] ${location.pathname === '/admin/phim-bo' ? 'bg-[#B91c1c]' : ''}`}>
                        <span className='place-self-start '>Danh sách phim bộ</span>
                </div>
            </Link>
            <Link to="/admin/the-loai" className=' cursor-pointer'>
                <div className={`font-bold p-5 pl-[10%] mx-2 my-3 hover:bg-[#B91c1c] ${location.pathname === '/admin/the-loai' ? 'bg-[#B91c1c]' : ''}`}>
                        <span className='place-self-start '>Danh sách thể loại</span>
                </div>
            </Link>
        </div>
        <div className='p-2 h-[10%]'>
            <span>
                <button onClick={handleLogout}>Đăng xuất</button>
            </span>
        </div>
    </div>
    );
}

export default MenuItemAdmin;
