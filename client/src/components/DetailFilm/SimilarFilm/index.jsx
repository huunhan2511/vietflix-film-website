import React from 'react'

export default function SimilarFilm() {
    let img = "https://static1.dienanh.net/upload/202201/b21fdd10-3ea0-4352-91b9-700d19859456.jpeg"
  return (
    <div className='flex flex-col'>
            <div>
                <span className='text-white text-[150%] font-bold '>Nội dung tương tự</span>
            </div>
            <div className='xs:grid xs:grid-cols-2 lg:grid lg:grid-cols-3 xs:gap-x-2 xs:gap-y-3 lg:gap-x-3 lg:gap-y-5 mt-7 pb-5 cursor-pointer'>
                <div className='flex flex-col bg-zinc-800 xs:h-64 sm:h-96 lg:h-96'>
                    <div className='h-[40%]'>
                        <img src={img} alt="background" className="h-full w-full" ></img>
                    </div>
                    <div className='h-[60%] py-2 px-4'>
                        <span className='text-gray-400'>Lorem Ipsum is 500</span>
                    </div>
                </div> 
            </div>
            
        </div>
  )
}
