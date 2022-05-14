import { useQuery } from '@apollo/client';
import React from 'react';
import DetailFilm from '../../components/DetailFilm';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeaderSm from '../../components/HeaderSm';
import Query from '../../query';
import Loading from '../../components/Loading';
import Film from '../../components/Film';
import { useLocation, useNavigate } from 'react-router-dom';
export default function TvShowPage() {
  const location = useLocation();  
  const navigate = useNavigate();
  const [genreId,setGenreId] = React.useState(location.state.genreId);
  const dataFilm = useQuery(Query.qGetGenreId,{variables:{genreId}});
  
  let [isOpen, setOpen] = React.useState(() => {
      let initState = false || JSON.parse(localStorage.getItem('isOpen'));
      return initState;
  });
  const [filmId,setFilmId] = React.useState(()=>{
    let initState = null || localStorage.getItem('filmId');
    return initState;
  });
  const openModal = (id) => {
      setFilmId(id);
      setOpen(true);
      localStorage.setItem('isOpen',true)
      document.body.style.overflow = 'hidden';
  }
  const closeModal = () => {
      setOpen(false);
      setFilmId(null)
      localStorage.setItem('isOpen',false)    
      document.body.style.overflow = 'unset';
  }
  
  if (dataFilm.loading) return <Loading/>
  if (dataFilm.loading) {
    navigate('/error')
  }
  return ( 
    <div className="HomePage min-h-screen mx-auto content-between" >
      <div className='relative'>
        <div className="fixed top-0 z-50 min-w-full backdrop-blur right-0 left-0 shadow">
          <Header ></Header>
          <HeaderSm />
        </div>
        
      </div>
      <div className="min-h-screen px-20 py-20">
        <div className='py-5'>
            <span className='text-base sm:text-[200%] uppercase font-bold'>
                Danh sách {location.state.filmType !== null && location.state.filmType === "TV Show" ? 'Phim bộ' : "Phim lẻ"} thể loại {location.state.title}
            </span>
        </div> 
        <div className='grid grid-cols-1 gap-y-4 sm:grid sm:grid-cols-2 sm:gap-3 md:grid md:grid-cols-3 xl:grid xl:grid-cols-4'>
        {
                  dataFilm.data.genre.films.filter(film=> film.filmType.name === location.state.filmType).map((film,key)=>{
                    return(
                        <Film openModal={openModal} film={film} key={key}/>
                    )
                  })
                }
        </div>
      </div>
      <div>
        <Footer/>
      </div>
      {filmId!==null && <DetailFilm isOpen={isOpen} closeModal={closeModal} filmId={filmId}/>}
    </div>
  )
}
