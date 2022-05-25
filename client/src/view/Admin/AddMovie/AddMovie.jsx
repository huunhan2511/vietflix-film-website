import React from 'react'
import { useState } from 'react'
import { Modal } from 'antd'
import { AddInfomation } from '../AddInfomationPanel/AddInfomation'
export default function AddMovie() {
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
        <>
            <div style={{backgroundColor: '#141414'}} className='min-h-screen flex justify-center'>
            <div style={{backgroundColor: '#191919'}} className='w-full m-8 rounded-xl'>
                <AddInfomation title='Phim Lẻ (Movie)'/>
                <div className='flex justify-center mt-6'>
                    <button onClick={showModal} className='btn-admin w-fit' type='submit'>Thêm phim</button>
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
            </div>
        </>
    )
}