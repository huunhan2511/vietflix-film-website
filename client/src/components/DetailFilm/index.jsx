import React from 'react'
import {faXmark,faPlay} from "@fortawesome/free-solid-svg-icons"
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Episode from './Episode';
import SimilarFilm from './SimilarFilm';
import { useQuery } from '@apollo/client';
import Query from '../../query';
import Loading from '../Loading';
import { useNavigate } from 'react-router-dom';
import logo from "../../img/320x80.png";
export default function DetailFilm({isOpen,closeModal,filmId}) {
    
    const navigate = useNavigate();
    const handleWatching = () =>{
        navigate(`/watch/${filmId}`,{state:{filmId:filmId}})
    }
    const {loading,error,data} = useQuery(Query.qGetDetailFilm,{variables:{filmId}})
    if (loading) return <Loading/>
    if (error) {
        navigate('/error')
    }
    return (
        <>
            <Modal
                ariaHideApp={false}
                className="Modal"
                overlayClassName="Overlay"
                isOpen={isOpen}
                onRequestClose={closeModal}
            >   
                <div className="relative md:h-[55%] cursor-pointer" >
                    <img
                        src={data.film.img}
                        alt="background"
                        className="h-full w-full"
                    />
                    <div className="absolute top-2 flex flex-col justify-between w-[100%] px-[2%] h-full">
                        <div className='grid justify-items-end' onClick={closeModal}>
                            <div className='bg-black px-5 py-3 text-[150%] rounded-full'>
                                <FontAwesomeIcon icon={faXmark} inverse />
                            </div>
                        </div>
                        <div className='mb-[10%] ml-[3%] flex flex-col'>
                            <div className="hidden lg:flex bg-gradient-to-r w-1/5 h-12 from-[#cbcaca7f]">
                                <span>
                                    <img src={logo} alt="logo" />
                                </span>
                            </div>
                            <span className='text-white text-[150%] xs:text-[150%] sm:text-left sm:text-[200%] md:text-[350%] lg:text[400%] font-semibold'>
                                <p className='truncate'>
                                    {data.film.name}
                                </p>
                            </span>
                            <div className=' w-[50%] p-1 sm:p-2 bg-red-600 xs:text-center md:w-[35%] lg:w-[25%] xl:w-[20%] flex items-stretch hover:bg-opacity-60'
                                onClick={handleWatching}
                            >
                                <FontAwesomeIcon icon={faPlay} inverse className='self-center'/>
                                <span className='text-white ml-2 font-bold self-center'>Xem ngay</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-[2%] pt-[5%] flex flex-col'>
                    <span className='sm:text-lg text-white font-semibold'>Tóm tắt phim : </span>
                    <span className='sm:text-lg text-zinc-400 mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
            
                </div>
                { 
                data.film.filmDetail.seasons.length 
                &&
                <div className='px-[2%] pt-[5%]'>
                    <Episode seasons={data.film.filmDetail.seasons} />
                </div>
                }
                
                <div className='px-[2%] pt-[5%]'>
                    <SimilarFilm/>
                </div>
                <div className='h-14'/>
                
            </Modal>
        </>
    )
}
