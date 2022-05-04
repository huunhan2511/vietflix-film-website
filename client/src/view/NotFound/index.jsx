import React from 'react'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeaderSm from '../../components/HeaderSm';
export default function NotFound() {
  return (
    <div className="min-h-screen mx-auto flex flex-col justify-between" >
      <div className='relative'>
        <div className="fixed top-0 z-50 min-w-full backdrop-blur right-0 left-0 shadow">
          <Header ></Header>
          <HeaderSm />
        </div>
      </div>
      <div className="xl:px-48 py-10 grid grid-flow-row"> 
            <span className='xs:text-[900%] lg:text-[1800%] font-light text-red-600 justify-self-center'>404</span>
            <span className='xs:text-[150%] sm:text-[300%] xl:text-[500%] font-bold justify-self-center'>Không tìm thấy trang</span>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
