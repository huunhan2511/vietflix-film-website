import React from 'react'
import MenuItemAdmin from '../MenuItemAdmin'

const LayoutAdmin = ({children}) => {
    return (
        <div className='flex justify-between !overflow-hidden'>
            <div className='w-[15%] !fixed'>
                <MenuItemAdmin/>
            </div>
            <div className='w-[85%] !right-0 !absolute min-h-screen'>
                {children}
            </div>
        </div>
    )
}
export default LayoutAdmin;