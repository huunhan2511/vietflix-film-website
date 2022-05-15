import { useQuery } from '@apollo/client';
import React,{useState} from 'react';
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
  
  const [lengthGenre, setlengthGenre] = useState();
  const navigate = useNavigate();
  const genre = useQuery(Query.qGetAllGenre,{
    onCompleted : (data) =>{
      setlengthGenre(data.genres.length)
    }
  });
  let quantity = 5
  const cardFilm = useQuery(Query.qGetFilmQuantity,{
    variables : {quantity}
  })
  let [isOpen, setOpen] = useState(() => {
    let initState = false || JSON.parse(localStorage.getItem('isOpen'));
    return initState;
  });
  const [filmId,setFilmId] = useState(()=>{
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

  if (genre.loading || cardFilm.loading) return <Loading/>
  if (genre.error || cardFilm.error){
    navigate('/error')
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
              cardFilm.data.films.map((film,key)=>{
                return(
                  <CardFilm openModal={openModal} film={film} key={key}/> 
                );
              })
            }
        </Slide>
        <div className="min-h-screen px-20 py-10"> 
          {
            genre.data.genres.slice(0,lengthGenre/2).map((genre,key)=>{
              return(
                <ListFilm key={key} title={genre.name} genreId={genre.id} films={genre.films} openModal={openModal}/>            
              )
            })
          }
          <Banner film={cardFilm.data.films[0]}/>
          {
            genre.data.genres.slice(lengthGenre/2).map((genre,key)=>{ 
              return(
                <ListFilm key={key} title={genre.name} genreId={genre.id} films={genre.films} openModal={openModal}/>            
              )
            })
          }
          <ListCenter title="Nổi bật"/>
        </div>
      </div>
      {filmId!==null && <DetailFilm isOpen={isOpen} closeModal={closeModal} filmId={filmId}/>}
    </Mylayout>
    
  )
}
