import { useQuery } from '@apollo/client';
import React from 'react';
import DetailFilm from '../../components/DetailFilm';
import ListFilm from '../../components/ListFilm';
import Query from '../../query';
import LoadingPage from '../LoadingPage';
import Mylayout from '../../components/Mylayout';
import { useNavigate } from 'react-router-dom';
export default function TvShowPage() {
  const genre = useQuery(Query.qGetGerneQuantityFilmQuantity,{
    variables:{
        "quantityGenres": 5,
        "quantityFilms": 10
    }
  });
  const navigate = useNavigate();
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
  
  if (genre.loading) return <LoadingPage page="phim-bo"/>
  if (genre.error) {
    navigate("/error")
  }
  return ( 
    <Mylayout>
      <div className="py-32 px-20">
        <span className='xl:text-[300%] md:text-[300%] xs:text-[200%] font-bold border-l-red-600 border-l-8'>
          Danh sách phim bộ
        </span>
        <div> 
          {
            genre.data.genres.map((genre,key)=>{
              return(
                <ListFilm key={key} title={genre.name} genreId={genre.id} films={genre.films.filter(film=> film.filmType.name === "TV Show")} openModal={openModal}/>            
              )
            })
          }
        </div>
      </div>
      {filmId!==null && <DetailFilm isOpen={isOpen} closeModal={closeModal} filmId={filmId}/>}
    </Mylayout>
  )
}
