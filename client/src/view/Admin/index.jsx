import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Admin() {
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem('token');
        navigate('/login-admin',{replace: true})  
    }  
    
    return (
        <>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}
