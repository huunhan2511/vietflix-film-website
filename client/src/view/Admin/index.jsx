import React from 'react'
import { Link, Router, useNavigate } from 'react-router-dom'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar'
import { FaEye, FaFilm, FaHome, FaList, FaSignOutAlt, FaPlus } from 'react-icons/fa'
import 'react-pro-sidebar/dist/css/styles.css'
import logo from '../../img/320x80.png'
export default function Admin() {
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem('token');
        navigate('/login-admin',{replace: true})  
    }  
    
    return (
        <>
            <div className='sideBarAdmin'>
                <ProSidebar width={300}>
                    <SidebarHeader>
                        <img src={logo} alt=''></img>
                    </SidebarHeader>
                    <SidebarContent>
                    <Router>
                        <Menu>
                            <MenuItem icon={<FaHome/>}>Dashboard</MenuItem>
                            <SubMenu title="Phim" icon={<FaFilm/>}>
                                <MenuItem>
                                    <SubMenu title="Phim lẻ" icon={<FaFilm/>}>
                                        <MenuItem icon={<FaEye/>}>Danh sách phim lẻ</MenuItem>
                                        <MenuItem icon={<FaPlus/>}>Thêm phim lẻ</MenuItem>
                                    </SubMenu>
                                </MenuItem>
                                <MenuItem>
                                    <SubMenu title="Phim bộ" icon={<FaFilm/>}>
                                        <MenuItem icon={<FaEye/>}>Danh sách phim bộ</MenuItem>
                                        <MenuItem icon={<FaPlus/>}>Thêm phim bộ</MenuItem>
                                    </SubMenu></MenuItem>
                            </SubMenu>
                            <SubMenu title="Thể loại" icon={<FaList/>}>
                                <MenuItem icon={<FaEye/>}>Danh sách thể loại</MenuItem>
                                <MenuItem icon={<FaPlus/>}>Thêm thể loại</MenuItem>
                            </SubMenu>
                            <MenuItem icon={<FaSignOutAlt/>}><button className='h-2' onClick={handleLogout}>Đăng xuất</button></MenuItem>
                        </Menu>
                    </Router>
                    </SidebarContent>
                    <SidebarFooter className='font-bold text-center'>Copyright 2022 <span className='text-red-600'>VietFlix</span> All Rights Reserved.</SidebarFooter>
                </ProSidebar>
            </div>
        </>
    )
}
