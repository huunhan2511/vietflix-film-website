import { useQuery } from '@apollo/client';
import React from 'react';
import DetailFilm from '../../components/DetailFilm';
import CardFilm from '../../components/CardFilm';
import ListFilm from '../../components/ListFilm';
import ListCenter from '../../components/ListFilm/ListCenter';
import Slide from '../../components/Slide';
import Query from '../../query';
import Loading from '../../components/Loading';
import Mylayout from '../../components/Mylayout';
import Banner from '../../components/Banner';
import { useNavigate } from 'react-router-dom';
export default function HomePage() {
  const dataCardFilm = useQuery(Query.qGetAllFilm);
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
  if (dataCardFilm.loading) return <Loading/>
  if (dataCardFilm.error){
    navigate('/NotFound')
  }
  return ( 
    <Mylayout>
      <div>
        <Slide
            className="background-image"
            slideToShow={1}
            speed={600}
            dots={true}
            autoplay={true}
          >
            { 
              dataCardFilm.data.films.map((item,key)=>{
                return(
                  <CardFilm openModal={openModal} film={item} key={key}/> 
                );
              })
            }
        </Slide>
        <div className="min-h-screen px-20 py-10"> 
          <ListFilm title="Thịnh hành" openModal={openModal}/>
          <Banner/>
          <ListFilm title="Mới phát hành " openModal={openModal}/>
          <ListCenter title="Nổi bật" />

          <ListFilm title="Gợi ý cho bạn" openModal={openModal}/>
        </div>
      </div>
      {filmId!==null && <DetailFilm isOpen={isOpen} closeModal={closeModal} filmId={filmId}/>}
    </Mylayout>
    
  )
}
