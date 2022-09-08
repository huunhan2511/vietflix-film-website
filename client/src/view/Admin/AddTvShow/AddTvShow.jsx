import React from 'react'
import { useState } from 'react'
import { AddEpisode } from '../component/AddEpisodePanel/AddEpisode';
import { AddInfomation } from '../component/AddInfomationPanel/AddInfomation';
import { AddSeason } from '../component/AddSeasonPanel/AddSeason';

export function AddTvShow() {
  return (
    <div>
      <div style={{backgroundColor: '#141414'}} className='min-h-screen p-5'>
        <AddInfomation title="Thêm phim bộ"/>
        <AddSeason/>
      </div>
    </div>
  )
}
