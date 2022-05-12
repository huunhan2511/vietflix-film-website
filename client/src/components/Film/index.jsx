import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
export default function Film({openModal,film}) {
  
  const navigate = useNavigate();
  let img = film.img;
  const handleWatching = () =>{
    navigate(`/watch/${film.id}`,{state:{filmId:film.id}})
  }
  return (
    <div className="relative block mb-2 w-full xs:ml-2 md:ml-6 md:max-w-[90%] lg:w-full group hover:scale-105 transition duration-500 custom-width ">      
        <img
            alt='background'
            src={img}
            className="h-52 sm:h-52 md:h-44 lg:h-48 xl:h-56 brightness-[.45] object-cover group-hover:brightness-25 group-hover:border-l-8 group-hover:border-l-red-500 w-full"
          />
          <div className="absolute top-10 left-3 xs:left-2 sm:left-3 lg:left-9 xs:top-10 sm:top-10 md:top-5 lg:top-5 xl:top-10 flex flex-col w-full ">
                <span className="sm:text-base md:text-lg max-w-[80%] text-white font-semibold">
                  <p className='truncate'>
                    {film.name}
                  </p>
                </span>
                <span className="sm:text-sm md:text-base max-w-[8rem] text-white my-3">1 giờ 30 phút</span>
                <div className='grid grid-cols-2 xs:mt-5 md:mt-2'>
                  <div className='cursor-pointer xs:max-w-[5rem] xs:px-1 md:max-w-[7.5rem] px-2 py-1 text-base font-semibold content-center border-red-600 bg-red-600 hover:bg-opacity-70 '
                      onClick={handleWatching}
                  >
                          <FontAwesomeIcon icon={faPlay} className="text-[60%] xs:text-[50%] md:text-[70%] md:mt-3 lg:mt-2 lg:ml-2 lg:text-base"/>
                          <span className='text-[70%] xs:ml-1 md:ml-1 lg:ml-2 text-white xs:text-[50%] md:text-sm lg:text-base'>
                              Xem ngay
                          </span>
                  </div>
                  <div className='place-self-center '>
                      <div className= 'cursor-pointer text-sm px-4 py-2 xs:text-base md:text-lg rounded-full bg-zinc-600 bg-opacity-50 hover:bg-red-600 hover:bg-opacity-60 xs:px-3 xs:py-1 md:px-5 md:py-2'
                        onClick={() => openModal && openModal(film.id)}
                      >
                        <FontAwesomeIcon icon={faInfo}/>
                      </div>
                  </div>
                </div>
          </div>
    </div>
  )
}
