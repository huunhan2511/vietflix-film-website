import React from 'react'
import { useState } from 'react'
import {Input} from 'antd'
import { Modal } from 'antd'

export default function AdminCategory() {
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
                <div style={{backgroundColor: '#191919'}} className='w-full h-fit m-8 rounded-xl'>
                    <div className='header-content-admin'>Thêm thể loại</div>
                    <div className='mx-8 mb-8'>
                        <Input placeholder='Tên thể loại' size='large'></Input>
                        <div className='flex justify-center'>
                            <button onClick={showModal} className='btn-admin w-[10%]' type='submit'>Thêm thể loại</button>
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
                                <p>Xác nhận thêm thể loại ?</p>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}