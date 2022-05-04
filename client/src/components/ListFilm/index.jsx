import React from 'react'
import Film from '../Film'
import Slide from '../Slide'

export default function ListFilm({title,openModal}) {
  return (
    <div className='w-full mt-10'>
      <div className='flex flex-row justify-between'>
        <span className='text-xs font-bold sm:text-2xl sm:font-bold'>{title}</span>
        <span className='text-xs sm:mt-2 sm:text-lg sm:font-light'>Xem tất cả</span>
      </div>
      <div className="list-film mt-7">
        <Slide
          className="listFilm"
          slideToShow={4}
          infinite={false} 
          dots={false}
        >
          <Film openModal={openModal}/>
          <Film openModal={openModal}/>
          <Film openModal={openModal}/>
          <Film openModal={openModal}/>
          <Film openModal={openModal}/>
          <Film openModal={openModal}/>
          <Film openModal={openModal}/>
          <Film openModal={openModal}/>
          
        </Slide>
      </div>
    </div>
  )
}
