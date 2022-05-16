import React from 'react';
import Film from '../Film';
import Slide from '../Slide';
import { useNavigate } from 'react-router-dom';

export default function ListFilm({title,openModal,genreId,filmType=null,films=[]}) {
  const navigate = useNavigate();
  const handleViewAll = () =>{
    navigate('/tat-ca',{state: {title:title,filmType:filmType,genreId:genreId}})
  }
  return (
    <>
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
            {
            // listFilm.data.genre.films.length < 4 ? 
            films.length < 4 ? 
            filmType === null
                ? 
                <div className='grid grid-cols-1 gap-y-4 sm:grid sm:grid-cols-2 sm:gap-3 md:grid md:grid-cols-3 xl:grid xl:grid-cols-4'>
                {
                  films.map((film,key)=>{
                    return(
                        <Film openModal={openModal} film={film} key={key}/>
                    );
                  })
                }
                </div>
                :
                <div className='grid grid-cols-1 gap-y-4 sm:grid sm:grid-cols-2 sm:gap-3 md:grid md:grid-cols-3 xl:grid xl:grid-cols-4'>
                {
                  films.filter(film=> film.filmType.name === filmType).map((film,key)=>{
                    return(
                        <Film openModal={openModal} film={film} key={key}/>
                    )
                  })
                }
                </div>
            :
            <Slide
              className="listFilm"
              slideToShow={4}
              infinite={false} 
              dots={false}
            >
              { 
                filmType === null
                ? 
                films.map((film,key)=>{
                  return(
                    <Film openModal={openModal} film={film} key={key}/>
                  );
                })
                :
                films.filter(film=> film.filmType.name === filmType).map((film,key)=>{
                    
                    return(
                      <Film openModal={openModal} film={film} key={key}/>
                    )
                  })
              }
              
            </Slide>
            }
          </div>
        </div>
    </>

  )
}
