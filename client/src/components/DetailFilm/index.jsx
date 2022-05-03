import React from 'react'
import {faXmark,faPlay} from "@fortawesome/free-solid-svg-icons"
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Episode from './Episode';
import SimilarFilm from './SimilarFilm';
export default function DetailFilm({children, episode=true }) {
    let img = "https://static1.dienanh.net/upload/202201/b21fdd10-3ea0-4352-91b9-700d19859456.jpeg"
    let [isOpen, setOpen] = React.useState(false);
    const openModal = () => {
        setOpen(true);
        document.body.style.overflow = 'hidden';
    }
    const closeModal = () => {
        setOpen(false);
        document.body.style.overflow = 'unset';
    }
    return (
        <>
            <span className='' onClick={openModal}>{children}</span>
            <Modal
                className="Modal"
                overlayClassName="Overlay"
                isOpen={isOpen}
                onRequestClose={closeModal}
                preventScroll={true}
                
            >   
                <div className="relative md:h-[55%] cursor-pointer" >
                    <img
                        src={img}
                        alt="background"
                        className="h-full w-full"
                    />
                    <div className="absolute top-2 flex flex-col justify-between w-[100%] px-[2%] h-full">
                        <div className='grid justify-items-end' onClick={closeModal}>
                            <div className='bg-black px-5 py-3 text-[150%] rounded-full'>
                                <FontAwesomeIcon icon={faXmark} inverse />
                            </div>
                        </div>
                        <div className='mb-[4%] ml-[2%]n flex flex-col'>
                             <h3 className="hidden lg:flex bg-gradient-to-r w-1/4 h-10 from-[#a20008] opacity-70 border-l-4 border-[#f70000] px-4 items-center">
                                <span className="items-center text-2xl font-bold opacity-100 text-red-600">
                                    SAGO
                                </span>
                            </h3>
                            <span className='text-white xs:text-[150%] xs:text-center sm:text-left sm:text-[200%] md:text-[350%] lg:text[400%] font-semibold'>Moon knight</span>
                            <div className='p-2 bg-red-600 xs:text-center md:w-[35%] lg:w-[25%] xl:w-[20%]'>
                                <FontAwesomeIcon icon={faPlay} inverse />
                                <span className='text-white ml-2 font-bold'>Xem ngay</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-[2%] pt-[5%] flex flex-col'>
                    <span className='text-lg text-white font-semibold'>Tóm tắt phim : </span>
                    <span className='text-lg text-zinc-400 mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
            
                </div>
                { episode === true ?
                <div className='px-[2%] pt-[5%]'>
                    <Episode/>
                </div>
                :
                <div></div>
                }
                <div className='px-[2%] pt-[5%]'>
                    <SimilarFilm/>
                </div>
                <div className='h-14'/>
            </Modal>
        </>
    )
}
