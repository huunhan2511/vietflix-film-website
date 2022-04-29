import React from 'react'
import Film from '../Film'
import Slide from '../Slide'

export default function ListFilm({title}) {
  return (
    <div className='w-full mt-10'>
      <div className='flex flex-row justify-between'>
        <span className='text-2xl'>{title}</span>
        <span className='text-lg'>Xem tất cả</span>
      </div>
      <div className="list-film mt-7">
        <Slide
          className="listFilm"
          slideToShow={4}
          infinite={false} 
          dots={false}
        >
          <Film/>
          <Film/>
          <Film/>
          <Film/>
          <Film/>
          <Film/>
          <Film/>
          <Film/>
          
        </Slide>
      </div>
    </div>
  )
}
