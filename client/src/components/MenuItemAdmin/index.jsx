import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
const MenuItemAdmin = () => {
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem('token');
        navigate('/login-admin',{replace: true})  
    }
    return (
        <div className='min-h-screen bg-[#191919] w-full text-white flex flex-col justify-between py-5'>
        <div className='text-[200%] h-[10%]'>
            <span className="pl-[10%] float-left font-extrabold after:content-['.'] after:text-4xl after:text-[#c09244]">HuuNhan</span>
        </div>
        <div className='h-full w-full'>
            <div className='font-bold h-12 pl-[10%] '>
                <Link to="/admin" className='gap-5 hover:text-[#c09244] cursor-pointer'>
                    <span className='place-self-start'>Tất cả phim</span>
                </Link>
            </div>
            <div className='font-bold h-12  pl-[10%]'>
                <Link to="/admin/phim-le" className='hover:text-[#c09244] cursor-pointer'>
                    <span className='place-self-start'>Danh sách phim lẻ</span>
                </Link>
            </div>
            <div className='font-bold h-12  pl-[10%]'>
                <Link to="/admin/phim-bo" className='hover:text-[#c09244] cursor-pointer'>
                    <span className='place-self-start'>Danh sách phim bộ</span>
                </Link>
            </div>
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
