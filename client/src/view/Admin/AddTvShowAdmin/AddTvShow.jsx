import React from 'react'
import { AddEpisode } from '../AddEpisodePanel/AddEpisode';
import { AddInfomation } from '../AddInfomationPanel/AddInfomation';
import { AddSeasion } from '../AddSeasionPanel/AddSeasion';

export function AddTvShow() {
  
  return (
    <div style={{backgroundColor: '#141414'}} className='h-screen flex justify-center'>
      <div style={{backgroundColor: '#191919'}} className='w-[70%] my-8 ml-8 rounded-xl'>
        <AddInfomation />
      </div>
      <div className='w-[30%] flex flex-col m-8 rounded-lg'>
        <AddEpisode/>
        <AddSeasion/>
      </div>
    </div>
  )
}
