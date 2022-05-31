import React from 'react'
import { Menu } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import {
    EyeOutlined,
    HomeOutlined,
    BarsOutlined,
    PlusOutlined,
    DesktopOutlined,
    LogoutOutlined
    
} from '@ant-design/icons';

const { SubMenu } = Menu;
export function MenuItemAdmin() {
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem('token');
        navigate('/login-admin',{replace: true})  
    }
    return (
        <Menu theme="light" mode="inline" >
            <Menu.Item key="/admin/tat-ca-phim" icon={<DesktopOutlined />}>
                <Link to="/admin/tat-ca-phim">Tất cả phim</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<BarsOutlined />} title="Phim lẻ">
                <Menu.Item key="/admin/phim-le" icon={<EyeOutlined />}>
                    <Link to="/admin/phim-le">Danh sách phim lẻ</Link>
                </Menu.Item>
                <Menu.Item key="/admin/them-phim-le" icon={<PlusOutlined />}>
                    <Link to="/admin/them-phim-le">Thêm phim lẻ</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<BarsOutlined />} title="Phim bộ">
                <Menu.Item key="/admin/phim-bo" icon={<EyeOutlined />}>
                    <Link to="/admin/phim-bo">Danh sách phim bộ</Link>
                </Menu.Item>
                <Menu.Item key="/admin/them-phim-bo" icon={<PlusOutlined />}>
                    <Link to="/admin/them-phim-bo">Thêm phim bộ</Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<BarsOutlined />} title="Thể loại">
                <Menu.Item key="/admin/the-loai" icon={<EyeOutlined />}>
                    <Link to="/admin/the-loai">Danh sách thể loại</Link>
                </Menu.Item>
                <Menu.Item key="/admin/them-the-loai" icon={<PlusOutlined />}>
                    <Link to="/admin/them-the-loai">Thêm thể loại</Link>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="/signout" icon={<LogoutOutlined />}>
            <button onClick={handleLogout}>Đăng xuất</button>
            </Menu.Item>

        </Menu>
    )
}