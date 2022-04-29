import React from 'react';
import CardFilm from '../../components/CardFilm';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeaderSm from '../../components/HeaderSm';
import ListFilm from '../../components/ListFilm';
import ListCenter from '../../components/ListFilm/ListCenter';
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
          <CardFilm/>  
          <CardFilm/>  
        </Slide>
      </div>
      <div class="min-h-screen px-20 py-10"> 
        <ListFilm title="Thịnh hành "/>
        <ListFilm title="Mới phát hành "/>
        <ListCenter title="Nổi bật"/>

        <ListFilm title="Gợi ý cho bạn"/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}
