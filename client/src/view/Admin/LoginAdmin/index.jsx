import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function LoginAdmin() {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem('token',"abc");
    console.log("login")
    navigate('/admin',{replace:true});
}
  return (
    <div className='flex justify-center'>
        <div className='border-2 rounded-md p-6 w-1/3 h-auto absolute top-1/3'>
          <div className='text-3xl font-bold text-center'> Đăng nhập</div>
          <input 
          type="email" 
          placeholder='Nhập email'
          className='w-full p-4 mt-4 outline-none rounded-md text-lg font-white'></input>

          <input 
          type="password" 
          placeholder='Nhập mật khẩu'
          className='w-full p-4 mt-4 outline-none rounded-md text-lg'></input>

          <button className='btnLogIn bg-red-600' onClick={handleLogin}>Đăng nhập</button>
        </div>
    </div>

  )
}
