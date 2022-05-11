import React from 'react'
import { Input, Cascader, message, Upload  } from 'antd'
import { InboxOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const { SHOW_CHILD } = Cascader;

const optionsCascader = [
  {
    label: 'Drama',
    value: 'drama',
  },
  {
    label: 'Action',
    value: 'action',
  },
  {
    label: 'Horror',
    value: 'Horror',
  },
];
const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
export function AddTvShow() {
  const onChange = value => {
    console.log(value);
  };
  
  return (
    <div style={{backgroundColor: '#141414'}} className='h-screen flex justify-center'>
      <div style={{backgroundColor: '#191919'}} className='w-[70%] my-8 ml-8 rounded-xl'>
        {/* Thẻ 1: Thông tin phim */}
        <div className='header-content-admin'>Thêm Thông Tin Tv Show</div>
        <Input placeholder='Tên phim' size='large'></Input>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
          <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
  </Dragger>
        <Input placeholder='Đường dẫn của phim' size='large'></Input>
          <Input placeholder='Năm xuất bản' size='large'></Input>
          <Input placeholder='Thời lượng phim' size='large'></Input>
        <Cascader
          style={{
            width: '97.3%',
            margin: '1.25rem 1.25rem 0 1.25rem'
          }}
          size='large'
          placeholder='Thể loại phim'
          options={optionsCascader}
          onChange={onChange}
          multiple
          maxTagCount="responsive"
          showCheckedStrategy={SHOW_CHILD}/>
        <TextArea placeholder='Mô tả' size='large' rows={6} />
      </div>
      <div className='w-[30%] flex flex-col m-8 rounded-lg'>
        {/* Thẻ 2: Thông tin tập */}
        <div style={{backgroundColor: '#191919'}} className='w-full h-[60%] mb-4 mr-4 rounded-xl'>
          b
        </div>
        {/* Thẻ 3: Thông tin mùa */}
        <div style={{backgroundColor: '#191919'}} className='w-full h-[40%] mt-4 mr-4 rounded-xl'>
          c
        </div>
      </div>
    </div>
  )
}
