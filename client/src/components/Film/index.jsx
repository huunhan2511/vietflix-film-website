import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
export default function Film() {
    let img = "https://static1.dienanh.net/upload/202201/b21fdd10-3ea0-4352-91b9-700d19859456.jpeg"
  return (
    <div className="relative block mb-2 xs:ml-2 md:ml-6 md:max-w-[90%] lg:w-full group hover:scale-105 transition duration-500 custom-width ">      
        <img
            src={img}
            className="h-52 sm:h-52 md:h-44 xl:h-48 brightness-[.45] object-cover group-hover:brightness-25 group-hover:border-l-8 group-hover:border-l-red-500"
          />
          <div className="absolute left-9 xs:top-10 sm:top-10 md:top-8 lg:top-10 flex flex-col w-full ">
                <span className="sm:text-base md:text-lg max-w-[8rem] text-white font-semibold">Moon knight</span>
                <span className="sm:text-sm md:text-base max-w-[8rem] text-white my-3">1 giờ 30 phút</span>
                <div className='xs:max-w-[5rem] xs:px-1 md:max-w-[7rem] px-2 py-1 content-center border-red-600 bg-red-600 hover:bg-opacity-70 '>
                        <FontAwesomeIcon icon={faPlay} />
                        <span className='ml-2 text-white xs:text-xs md:text-base'>
                            Xem ngày
                        </span>
                </div>
          </div>
    </div>
  )
}
