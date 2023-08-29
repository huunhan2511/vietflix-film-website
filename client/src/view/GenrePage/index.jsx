import React,{useEffect,useState} from 'react'
import { useQuery } from '@apollo/client';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeaderSm from '../../components/HeaderSm';
import LoadingPage from '../LoadingPage';
import Film from '../../components/Film';
import DetailFilm from '../../components/DetailFilm';
import { useLocation, useNavigate } from 'react-router-dom';
import Query from '../../query';

const GenrePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [genreId,setGenreId] = useState('');
    useEffect(()=>{
        if(location.state && location.state.genreId){
            setGenreId(location.state.genreId)
        }else{
            navigate('/')
        }
    },[location.state])

    const {loading,data} = useQuery(Query.qGetGenreId,{variables:{genreId}});
    
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
    if (loading) return <LoadingPage page="tat-ca"/>
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
            <span className='xl:text-[300%] md:text-[300%] xs:text-[200%] font-bold border-l-red-600 border-l-8'>
                Danh sách phim thể loại "{location.state.title}"
            </span>
        </div> 
        {
            data.genre.films.length > 0 
                        
            ?
            <div className='grid grid-cols-1 gap-y-4 sm:grid sm:grid-cols-2 sm:gap-3 md:grid md:grid-cols-3 xl:grid xl:grid-cols-4'>
                {data.genre.films.map((film,key)=>{
                    return(
                        <Film openModal={openModal} film={film} key={key}/>
                    )
                })}
            </div>
            :
            <div className='w-full pt-[30vh] flex justify-center content-center'>
                <h1 className='text-base sm:text-[200%]'>Không tìm thấy phim của thể loại "{location.state.title}"</h1>
            </div>
        }
      </div>
          <div>
            <Footer/>
          </div>
          {filmId!==null && <DetailFilm isOpen={isOpen} closeModal={closeModal} filmId={filmId}/>}
        </div>
      )
}

export default GenrePage