import { useQuery } from '@apollo/client';
import React from 'react'
import SlideCenter from '../../../components/Slide/SlideCenter';
import Query from '../../../query';

export default function ListCenter({title}) {
  let quantity = 5
  const datafilm = useQuery(Query.qGetFilmQuantity,{
    variables : {quantity}
  })
  return (
    <div className='mt-10'>
      <span className='text-sm sm:text-2xl font-bold'>{title}</span>
      <div className='mt-5 md:px-5'>
      <SlideCenter 
        slidesToShow={3}
      >
        {datafilm.data.films.map((film,key)=>{
          return(
            <div key={key}>
              <img src={film.img} alt='background' className='w-full'></img>
            </div>
          );
        })}
      </SlideCenter>
      </div>
    </div>
  )
}
