import React from 'react'
import SidebarAdmin from '../SidebarAdmin'
import { Layout } from 'antd'

const { Content } = Layout;
export const LayoutAdmin = (props) => {

    const { childComponent } = props;
    return (
        <>
            <div className='flex justify-between !overflow-hidden'>
                <div className='w-[15%] !fixed'>
                    <SidebarAdmin/>
                </div>
                <div className='w-[85%] !right-0 !absolute'>
                    <Content className='!h-fit'>
                        {childComponent}
                    </Content>
                </div>
            </div>
        </>
    )
}
