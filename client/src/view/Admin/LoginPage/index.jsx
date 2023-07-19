import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Query from '../../../query/index.jsx';
import { ToastContainer,toast } from 'react-toastify';

export default function LoginPage() {
  const navigate = useNavigate();
  const [mutateFunction] = useMutation(Query.mLogin, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.loginAdmin.token);
      navigate('/admin');
      toast.success('Đăng nhập thành công');
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });
  const [newLogin, setNewLogin] = useState({
    username: '',
    password: ''
  });

  const handleLogin = (event) => {
    event.preventDefault();
    mutateFunction({
      variables: {
        input: {
          username: newLogin.username,
          password: newLogin.password
        }
      }
    });
  };

  const onInputChange = (event) => {
    setNewLogin({
      ...newLogin,
      [event.target.name]: event.target.value
    });
  };

  const style = {
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8),rgba(0,0,0,1)),
    url(https://assets.nflxext.com/ffe/siteui/vlv3/bff5732c-7d13-45d1-9fab-476db25a1827/6ae246b1-b424-4e72-a217-f7895602959a/VN-vi-20230710-popsignuptwoweeks-perspective_alpha_website_large.jpg)`
  };

  return (
    <div style={style}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <form className="flex justify-center" onSubmit={handleLogin}>
        <div className="border-2 rounded-md p-6 w-1/3 h-auto absolute top-1/3 border-red-600 bg-[#202020] brightness-125">
          <div className="text-3xl font-bold text-center text-white">Đăng nhập</div>
          <div className="form__group field w-100 mt-5">
            <input
              type="text"
              onChange={onInputChange}
              name="username"
              className="form__field"
              autoComplete="off"
            />
            <label htmlFor="name" className="form__label">
              Tài khoản
            </label>
          </div>
          <div className="form__group field w-100 mt-5">
            <input
              type="password"
              onChange={onInputChange}
              className="form__field"
              name="password"
              autoComplete="off"
            />
            <label htmlFor="name" className="form__label">
              Mật khẩu
            </label>
          </div>
          <div className="w-100 flex justify-end">
            <button className="btn-admin" type="submit">
              Đăng nhập
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
