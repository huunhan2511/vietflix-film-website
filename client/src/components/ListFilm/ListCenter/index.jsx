import React from 'react'
import SlideCenter from '../../../components/Slide/SlideCenter';

export default function ListCenter({title}) {
  return (
    <div className='mt-10'>
      <span className='text-2xl'>{title}</span>
      <div className='md:px-5'>
      <SlideCenter 
        slidesToShow={5}
      >
        <div>
          <img src="https://static1.dienanh.net/upload/202201/b21fdd10-3ea0-4352-91b9-700d19859456.jpeg" alt='background'></img>
        </div>
        <div>
          <img src="https://static1.dienanh.net/upload/202201/b21fdd10-3ea0-4352-91b9-700d19859456.jpeg" alt='background'></img>
        </div>
        <div>
          <img src="https://static1.dienanh.net/upload/202201/b21fdd10-3ea0-4352-91b9-700d19859456.jpeg" alt='background'></img>
        </div>
        <div>
          <img src="https://static1.dienanh.net/upload/202201/b21fdd10-3ea0-4352-91b9-700d19859456.jpeg" alt='background'></img>
        </div>
        <div>
          <img src="https://static1.dienanh.net/upload/202201/b21fdd10-3ea0-4352-91b9-700d19859456.jpeg" alt='background'></img>
        </div>
        <div>
          <img src="https://static1.dienanh.net/upload/202201/b21fdd10-3ea0-4352-91b9-700d19859456.jpeg" alt='background'></img>
        </div>
        <div>
          <img src="https://static1.dienanh.net/upload/202201/b21fdd10-3ea0-4352-91b9-700d19859456.jpeg" alt='background'></img>
        </div>
      </SlideCenter>
      </div>
    </div>
  )
}
