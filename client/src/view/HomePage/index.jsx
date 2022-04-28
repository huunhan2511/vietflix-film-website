import React from 'react';
import CardFilm from '../../components/CardFilm';
import Header from '../../components/Header';
import HeaderSm from '../../components/HeaderSm';
import Slide from '../../components/Slide';
export default function HomePage() {
  return ( 

    <div class="HomePage min-h-screen mx-auto content-between" >
      <div className='relative'>
        <div className="fixed top-0 z-50 min-w-full backdrop-blur right-0 left-0 shadow">
          <Header ></Header>
          <HeaderSm />
        </div>
        <Slide
          className="background-image"
          slideToShow={1}
          speed={600}
          dots={true}
          autoplay={true}
        >
          <CardFilm/>  
          {/* <CardFilm/>  
          <CardFilm/>   */}
        </Slide>
      </div>
      <div class="min-h-screen"> </div>
      
    </div>
  )
}
