import React from 'react'
import { Input, Cascader,message, Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;
const { TextArea } = Input;
const { SHOW_CHILD } = Cascader;
const optionsCategoryCascader = [
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
const onChange = value => {
    console.log(value);
};
export function AddInfomation() {
    return (
        <>
            <div className='header-content-admin'>Thêm Thông Tin Tv Show</div>
            <div className='m-auto w-[96.5%]'>
            <Input className='input-infomation' placeholder='Tên phim' size='large'></Input>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
            </Dragger>
            <Input className='input-infomation' placeholder='Đường dẫn của phim' size='large'></Input>
            <Input className='input-infomation' placeholder='Năm xuất bản' size='large'></Input>
            <Input className='input-infomation' placeholder='Thời lượng phim' size='large'></Input>
            <Cascader
                style={{
                width: '100%',
                marginTop: '1.5rem'
                }}
                size='large'
                placeholder='Thể loại phim'
                options={optionsCategoryCascader}
                onChange={onChange}
                multiple
                maxTagCount="responsive"
                showCheckedStrategy={SHOW_CHILD}/>
            <TextArea placeholder='Mô tả' size='large' rows={9} />
            </div>
        </>
    )
}