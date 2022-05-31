import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import adminQuery from "../AdminQuery";

export default function LoginPage() {
  const navigate = useNavigate();
  const [mutateFunction, { data, loading, error }] = useMutation(adminQuery.mLogin,{onCompleted : (data)=> {
    localStorage.setItem("token",data.loginAdmin.token);
    navigate("/admin/tat-ca-phim");
  },
  onError: (error) => alert(error.message)
  });
  const [newLogin, setNewLogin] = useState({
    username: "",
    password: ""
  });
  const { username, password } = newLogin;

  const onInputChange = event => {
  setNewLogin({
    ...newLogin,
    [event.target.name]: event.target.value,
  })
  
}
  
  const handleLogin = () => {
    mutateFunction({
      variables: {
        input: {
          username: username,
          password: password
        },
      }
    });
  }

  return (
    <div className='flex justify-center'>
        <div className='border-2 rounded-md p-6 w-1/3 h-auto absolute top-1/3'>
          <div className='text-3xl font-bold text-center'> Đăng nhập</div>
          <input 
            type="email" 
            placeholder='Nhập email'
            onChange = {onInputChange}
            className='w-full p-4 mt-4 outline-none rounded-md text-lg font-white'
            name = "username">
          </input>

          <input 
          type="password" 
          placeholder='Nhập mật khẩu'
          onChange = {onInputChange}
          className='w-full p-4 mt-4 outline-none rounded-md text-lg font-white'
          name = "password">
          </input>

          <button className='btn-admin' onClick={handleLogin}>Đăng nhập</button>
        </div>
    </div>
  )
}
