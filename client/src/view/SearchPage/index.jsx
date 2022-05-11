import { useQuery } from '@apollo/client';
import React from 'react';
import DetailFilm from '../../components/DetailFilm';
import Query from '../../query';
import Loading from '../../components/Loading';
import Film from '../../components/Film';
import { useLocation } from 'react-router-dom';
import Mylayout from '../../components/Mylayout';
export default function SearchPage() {
  const location = useLocation();
  const dataCardFilm = useQuery(Query.qGetAllFilm);
  
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
  
  if (dataCardFilm.loading) return <Loading/>
  return ( 
    <Mylayout>
      <div className="px-20 py-32"> 
        <div>
          <span className='xl:text-[300%] md:text-[300%] xs:text-[200%] font-bold border-l-red-600 border-l-8'>
            Kết quả tìm kiếm theo "{location.state.inputSearch}"
          </span>
        </div>
        <div className='grid grid-cols-1 gap-y-4 sm:grid sm:grid-cols-2 sm:gap-3 md:grid md:grid-cols-3 xl:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-4 mt-3'>
        {
            dataCardFilm.data.films.map((film,key)=>{
                return(
                    <Film film={film} key={key} openModal={openModal}/>
                );
            })
        }
        </div>
      </div>
      {filmId!==null && <DetailFilm isOpen={isOpen} closeModal={closeModal} filmId={filmId}/>}
    </Mylayout>
  )
}
