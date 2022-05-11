import React from 'react'
import Mylayout from '../../components/Mylayout';
export default function NotFound() {
  return (
    <Mylayout>
      <div className="xl:px-48 py-10 grid grid-flow-row"> 
            <span className='xs:text-[900%] lg:text-[1800%] font-light text-red-600 justify-self-center'>404</span>
            <span className='xs:text-[150%] sm:text-[300%] xl:text-[500%] font-bold justify-self-center'>Không tìm thấy trang</span>
      </div>
    </Mylayout>
  )
}
