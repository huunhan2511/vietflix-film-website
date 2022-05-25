import * as React from 'react'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import { MenuItemAdmin } from '../MenuItemAdmin/MenuItemAdmin'
import logo from '../../img/320x80.png'

const { Sider } = Layout;
export default function SidebarAdmin (){
        return (
            <Layout >
                <Sider theme='light'
                style={{ overflow: 'auto',
                         height: '100vh',
                         left: 0,
                        }}
                >
                    <img src={logo} alt=''></img>
                    <MenuItemAdmin />
                </Sider>
            </Layout>
        )
}