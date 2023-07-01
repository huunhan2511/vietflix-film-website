import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import Query from "../../../query/index.jsx";

export default function LoginPage() {
  const navigate = useNavigate();
  const [mutateFunction] = useMutation(Query.mLogin,{onCompleted : (data)=> {
    localStorage.setItem("token",data.loginAdmin.token);
    navigate("/admin");
  },
  onError: (error) => alert(error.message)
  });
  const [newLogin, setNewLogin] = useState({
    username: "",
    password: ""
  });

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
          username: newLogin.username,
          password: newLogin.password
        },
      }
    });
  }

  return (
    <form className='flex justify-center' action={handleLogin}>
        <div className='border-2 rounded-md p-6 w-1/3 h-auto absolute top-1/3 border-red-600'>
          <div className='text-3xl font-bold text-center text-white'>Đăng nhập</div>
          <div className='form__group field w-100 mt-5'>
            <input 
              type="email" 
              onChange = {onInputChange}
              name = "username"
              className="form__field" 
              autocomplete="off"/>
            <label for="name" className="form__label">Tài khoản</label>
          </div>
          <div className='form__group field w-100 mt-5'>
          <input 
          type="password" 
          onChange = {onInputChange}
          className="form__field" 
          name = "password"
          autocomplete="off"/>
          <label for="name" className="form__label">Mật khẩu</label>
          </div>
          <div className="w-100 flex justify-end">
            <button className='btn-admin' onClick={handleLogin}>Đăng nhập</button>
          </div>
        </div>
    </form>
  )
}
