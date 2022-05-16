import React from 'react'

export default function Banner({film}) {
    let img =  film.img
    const style = {
        backgroundImage : `url('${img}')`
    }
    return (
        <div className='lg:p-4'>
            <div 
                style={style}
                className="bg-contain md:bg-cover mt-5 w-full h-64 p-2 xs:p-5 md:h-[22rem] xl:h-[30rem] xl:py-[2.5%] xl:px-20"
            >
                <div className='card-banner max-h-full min-h-full sm:flex sm:justify-between xl:p-10 sm:items-center'>
                    <div className='max-h-full w-full xs:h-[10rem] sm:min-h-full md:h-[15rem] md:w-[50%] xl:h-[20rem]'>
                        <img src={img} alt="banner" className='h-full w-full p-2 object-fill'/>
                    </div>
                    <div className='w-full p-2  md:w-[50%] md:p-10 max-h-full min-h-full'>
                        <span>
                            <p className='truncate text-red-600 text-center sm:text-left text-[150%] font-semibold lg:font-bold lg:text-[300%]'>
                                {film.name}
                            </p>
                        </span>
                        <span className='hidden sm:flex text-white max-h-full text-[50%] xs:text-xs md:text-sm xl:text-[150%]'>
                            <p className='break-words description'>
                            {!film.description ? "Không có thông tin tóm tắt phim " : film.description}
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
