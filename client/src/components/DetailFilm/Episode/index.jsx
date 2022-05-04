import React from 'react'
import { Picker,Item } from '@adobe/react-spectrum'
let options=[
    { seasonNumber: "Mùa 1" },
    { seasonNumber: "Mùa 2" }
]

export default function Episode(seasonSelect=true) {
    let img = "https://static1.dienanh.net/upload/202201/b21fdd10-3ea0-4352-91b9-700d19859456.jpeg"
    let [season,setSeason] = React.useState(options[0]);
    return (
        <div className='flex flex-col'>
            <div className='grid grid-cols-2 justify-between'>
                <span className='text-white text-[150%] font-bold '>Tập</span>
                {seasonSelect === false
                    ? 
                    <span className='text-white place-self-end'>Mùa 1</span>
                    :
                    <div className = 'selectSeason'>
                        <select className='bg-neutral-900 text-white px-5 py-2 xs:px-5 xs:py-2 float-right xs:w-[70%] sm:w-[50%] md:w-[35%]'>
                        {options.map((item,key)=>{
                            return (
                                    <option className='bg-neutral-900 text-white' key={key} value={item.seasonNumber}>{item.seasonNumber}</option>
                            )
                        })}
                        </select>
                    </div>
                }
            </div>
            <div className='mt-7'>
                <div>
                    <div className='flex text-gray-400 px-2 xs:px-10 h-24 xs:h-28 md:h-40 gap-4 cursor-pointer hover:bg-zinc-800'>
                        <div className='flex-initial w-[5%] '>
                        <div className='grid grid-cols-1 place-content-center h-full'>
                                <span className='text[100%] xs:text-[250%] font-semibold'>1</span>
                            </div>
                        </div>
                        <div className='flex-initial w-[25%]'>
                            <img src={img} alt="background" className="h-full w-full py-4 sm:py-5" ></img>
                        </div>
                        <div className='flex-initial w-[70%]'>
                            <div className='grid grid-cols-1 place-content-center h-full'>
                                <span className='text-xs sm:text-base xs:text-xs'>Lorem Ipsum is 500</span>
                            </div>
                        </div>
                    </div>
                    <hr className='w-full'/>
                </div>
            </div>
        </div>
  )
}
