import React from 'react'
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom';
import logo from "../../img/320x80.png";

export default function CardFilm({openModal,film}) {
  const navigate = useNavigate();
  let img = film.img;
  const handleWatching = () =>{
    navigate(`/watch/${film.id}`,{state:{filmId:film.id}})
  }
  const getGenres = () =>{
    let genres = ""
    film.genres.map((item) => {
      genres += item.name+", "
    })
    return genres.slice(0,-2)+'.'
  }
  
  return (
    <div className="relative h-96 md:h-screen cursor-pointer">
        <img
            src={img}
            alt="background"
            className="brightness-[0.4] h-full w-full"
        />

        <div className="absolute left-0 top-24 w-full px-6 lg:top-40 lg:mx-20 md:top-[25%] md:h-[80%]  md:grid md:grid-cols-2 sm:top-24 sm:place-content-center xs:top-16 xs:grid xs:grid-rows-2 xs:place-content-center">
            <div className="col-span-1 flex flex-col xl:mt-20 xs:place-items-center md:place-items-start">
                <div className="hidden lg:flex bg-gradient-to-r w-1/5 h-12 from-[#cbcaca7f] mb-5">
                  <span>
                    <img src={logo} alt="logo" />
                  </span>
                </div>
                <span className=" items-center w-full xs:text-[1.5rem] sm:text-[2rem] md:text-[2rem] lg:text-[3rem] xl:text-[3rem] font-bold opacity-100 text-white">
                <p className='text-center md:text-left line-clamp-2'>
                  {film.name}
                </p>  
                </span> 
                <span className='hidden md:block w-[80%] sm:text-sm lg:text-xl mb-5 max-h-[10rem] max-w-full'>
                  <p className='line-clamp-6'>
                  {!film.description ? "Không có thông tin tóm tắt phim " : film.description}
                  </p>
                </span>
                <span className='flex gap-8 justify-center'>
                    <span className='sm:test-sm lg:text-xl text-red-600'>
                        Thể loại : 
                    </span>
                    <span className='text-sm sm:test-sm lg:text-xl text-white'>
                       {
                        getGenres()
                       }
                    </span>
                </span>
                <span className='mt-5 flex justify-center'>
                  <div className='text-xl px-5 py-2 w-[70%] xs:w-full md:text-[150%] md:px-8 md:py-3 bg-zinc-700 bg-opacity-50 hover:bg-red-600 hover:bg-opacity-50' onClick={() => openModal && openModal(film.id)} >
                      <FontAwesomeIcon icon={faCircleExclamation} inverse/>
                      <span className='ml-2'>
                        Xem thông tin
                      </span>
                    </div>
                </span>
        
            </div>
            <div className="col-span-1 items-center flex place-content-center lg:mt-[20%] lg:flex md:flex sm:grid sm:grid-flow-col sm:mt-5 xs:mt-5 xs:grid xs:grid-flow-col"
              onClick={handleWatching}
            >
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
                <span className="uppercase text-base md:text-2xl leading-5 tracking-[0.75rem] text-gray-50">
                  Xem ngay
                </span>
            </div>
        </div>
    </div>
  )
}
