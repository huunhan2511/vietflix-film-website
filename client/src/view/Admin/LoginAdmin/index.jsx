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
    <button className='border-2 p-4' onClick={handleLogin}>LoginAdmin</button>
  )
}
