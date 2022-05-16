import React from 'react'
import { useState } from 'react'
import { AddEpisode } from '../AddEpisodePanel/AddEpisode';
import { AddInfomation } from '../AddInfomationPanel/AddInfomation';
import { AddSeasion } from '../AddSeasionPanel/AddSeasion';
import { Modal } from 'antd'

export function AddTvShow() {
const [isModalVisible, setIsModalVisible] = useState(false);

const showModal = () => {
  setIsModalVisible(true);
};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};
  return (
    <div style={{backgroundColor: '#141414'}} className='h-screen flex justify-center'>
      <div style={{backgroundColor: '#191919'}} className='w-[70%] my-8 ml-8 rounded-xl'>
        <AddInfomation title='Phim Bộ (TvShow)'/>
        <div className='flex justify-center'>
          <button onClick={showModal} className='btn-admin w-[15%]' type='submit'>Thêm phim</button>
          <Modal 
            title="Xác nhận" 
            visible={isModalVisible} 
            onOk={handleOk} 
            onCancel={handleCancel}
            bodyStyle={{
              backgroundColor: '#191919',
              color: '#fff',
              paddingTop: '20px',
              paddingBottom: '20px'
            }}
          >
            <p>Xác nhận thêm phim ?</p>
          </Modal>
        </div>
      </div>
      <div className='w-[30%] flex flex-col m-8 rounded-lg'>
        <AddEpisode/>
        <AddSeasion/>
      </div>
    </div>
  )
}