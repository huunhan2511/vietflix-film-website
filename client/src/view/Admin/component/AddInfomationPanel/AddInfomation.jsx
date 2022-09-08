import React from 'react'
import { Input, Cascader } from 'antd'
// import { UploadOutlined } from '@ant-design/icons';

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

const onChange = value => {
    console.log(value);
};
export function AddInfomation({title}) {
    return (
      <div className='h-fit w-full mb-5 rounded-xl pb-5 bg-[#191919]'>
        <div className='grid grid-flow-col justify-between place-items-center px-3'>
          <span className='header-content-admin '>Thêm Thông Tin {title}</span>
          <div className='w-40 px-5 h-12'>
            <button className='bg-[#DC2626] rounded-md font-semibold !w-full !min-h-full'>Thêm phim</button>
          </div>
        </div>
        <div className="m-auto w-[96.5%]">
          <Input
            className="!mt-3"
            placeholder="Tên phim"
            size="large"
          ></Input>
          {/* <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
          >
            <button className='btn-admin text-white m-1' style={{width: '100%'}}>Tải ảnh của phim</button>
          </Upload> */}
          <Input className="!mt-3" placeholder="Đường dẫn ảnh phim" size="large"></Input>
          <Input className="!mt-3" placeholder="Đường dẫn của phim" size="large"></Input>
          <Input className="!mt-3" placeholder="Năm xuất bản" size="large"></Input>
          <Input className="!mt-3" placeholder="Thời lượng phim" size="large"></Input>
          <Cascader
            style={{
              width: "100%",
              marginTop: "0.75rem",
            }}
            size="large"
            placeholder="Thể loại phim"
            options={optionsCategoryCascader}
            onChange={onChange}
            multiple
            maxTagCount="responsive"
            showCheckedStrategy={SHOW_CHILD}
          />
          <TextArea className="!mt-3" placeholder="Mô tả" size="large" rows={5} />
        </div>
      </div>
    );
}