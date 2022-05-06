import React from 'react';
import Film from '../Film';
import Slide from '../Slide';
import { useQuery } from '@apollo/client';
import Query from '../../query';
import Loading from '../Loading';
import { useNavigate } from 'react-router-dom';

export default function ListFilm({title,openModal}) {
  const navigate = useNavigate();
  const handleViewAll = () =>{
    navigate('/tat-ca',{state: {title:title}})
  }
  const listFilm = useQuery(Query.qGetAllFilm);
  return (
    <>
      {
        listFilm.loading 
        ? 
        <Loading/>
        :
        <div className='w-full mt-10'>
          <div className='flex flex-row justify-between'>
            <span className='text-xs font-bold sm:text-2xl sm:font-bold'>{title}</span>
            <span className='text-xs sm:mt-2 sm:text-lg sm:font-light hover:text-red-500 cursor-pointer'
                onClick={handleViewAll}
            >
              Xem tất cả
            </span>
          </div>
          <div className="list-film mt-7">
            <Slide
              className="listFilm"
              slideToShow={4}
              infinite={false} 
              dots={false}
            >
              {
                listFilm.data.films.map((film,key)=>{
                  return(
                    <Film openModal={openModal} film={film} key={key}/>
                  );
                })
              }
              
            </Slide>
          </div>
        </div>
      }
    </>

  )
}
