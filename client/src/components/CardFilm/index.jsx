import React from 'react'
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CardFilm({openModal}) {
    let img = "https://static1.dienanh.net/upload/202201/b21fdd10-3ea0-4352-91b9-700d19859456.jpeg"
  return (
    <div className="relative h-80 md:h-[40rem] lg:h-[35rem] xl:h-[55rem] cursor-pointer">
        <img
            src={img}
            alt="background"
            className="brightness-[0.4] h-full w-full"
        />

        <div className="absolute left-0  w-full px-6 lg:top-40 lg:mx-20 md:top-[25%] md:h-[80%]  md:grid md:grid-cols-2 sm:top-20 sm:place-content-center xs:top-12 xs:grid xs:grid-rows-2 xs:place-content-center">
            <div className="col-span-1 flex flex-col xl:mt-20 xs:place-items-center md:place-items-start">
                <h3 className="hidden lg:flex bg-gradient-to-r w-1/4 h-10 from-[#a20008] opacity-70 border-l-4 border-[#f70000] mb-5 px-4 items-center">
                  <span className="items-center text-2xl font-bold opacity-100 text-red-600">
                    SAGO
                  </span>
                </h3>
                <span className=" items-center xs:text-[2rem] sm:text-[3rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] font-bold opacity-100 text-white">
                Moon Knight    
                </span> 
                <span className='hidden md:block w-[80%] text-xl mb-5'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </span>
                <span className='flex gap-8'>
                    <span className='text-xl text-red-600'>
                        Thể loại : 
                    </span>
                    <span className='text-xl text-white'>
                        Hành động 
                    </span>
                </span>
                <span className='mt-5'>
                  <div className='text-[150%] px-8 py-3 bg-zinc-700 bg-opacity-50' onClick={() => openModal && openModal('5')} >
                      <FontAwesomeIcon icon={faCircleExclamation} inverse/>
                      <span className='ml-2'>
                        Xem thông tin
                      </span>
                    </div>
                </span>
        
            </div>
            <div className="col-span-1 items-center place-content-center lg:mt-[20%] lg:flex md:flex sm:grid sm:grid-flow-col sm:mt-5 xs:mt-5 xs:grid xs:grid-flow-col">
                <span className="playBut mr-5 transition delay-[1000ms] hover:border-none">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlnsa="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                    x="0px"
                    y="0px"
                    width="80px"
                    height="80px"
                    viewBox="0 0 213.7 213.7"
                    enableBackground="new 0 0 213.7 213.7"
                    xmlSpace="preserve"
                  >
                    <polygon
                      className="triangle"
                      id="XMLID_18_"
                      fill="none"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      points="73.5,62.5 148.5,105.8 73.5,149.1 "
                    />

                    <circle
                      className="circle"
                      id="XMLID_17_"
                      fill="none"
                      strokeWidth="7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      cx="106.8"
                      cy="106.8"
                      r="103.3"
                    />
                  </svg>
                  </span>
                <span className="uppercase text-2xl leading-5 tracking-[0.75rem] text-gray-50">
                  Xem ngay
                </span>
            </div>
        </div>
    </div>
  )
}
