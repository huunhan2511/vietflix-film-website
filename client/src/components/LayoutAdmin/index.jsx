import React from 'react'
import MenuItemAdmin from '../MenuItemAdmin'
import Loadingitem from '../LoadingItem'
import { ToastContainer } from "react-toastify";
const LayoutAdmin = ({children}) => {
    return (
        <div className='flex justify-between !overflow-hidden'>
            <div className='w-[15%] !fixed'>
                <MenuItemAdmin/>
            </div>
            <div className='w-[85%] !right-0 !absolute min-h-screen'>
                {children}
            </div>
            <div className='loader-container' id='loader'>
                <Loadingitem/>
            </div>
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
        </div>
    )
}
export default LayoutAdmin;