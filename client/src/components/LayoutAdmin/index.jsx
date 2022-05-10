import React from 'react'
import SidebarAdmin from '../SidebarAdmin'
import { Layout } from 'antd'

const { Content } = Layout;
export const LayoutAdmin = (props) => {

    const { childComponent } = props;
    return (
        <>
            <div className='flex justify-between'>
                <div className='w-[15%]'>
                    <SidebarAdmin/>
                </div>
                <div className='w-[85%]'>
                    <Content>
                        {childComponent}
                    </Content>
                </div>
            </div>
        </>
    )
}
