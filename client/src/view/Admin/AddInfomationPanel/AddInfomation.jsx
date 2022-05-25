import React from 'react'
import { Input, Cascader, /*Button, Upload*/ } from 'antd'
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
      <>
        <div className="header-content-admin">Thêm Thông Tin {title}</div>
        <div className="m-auto w-[96.5%]">
          <Input
            className="input-infomation"
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
          <Input placeholder="Đường dẫn ảnh phim" size="large"></Input>
          <Input placeholder="Đường dẫn của phim" size="large"></Input>
          <Input placeholder="Năm xuất bản" size="large"></Input>
          <Input placeholder="Thời lượng phim" size="large"></Input>
          <Cascader
            style={{
              width: "100%",
              marginTop: "1.5rem",
            }}
            size="large"
            placeholder="Thể loại phim"
            options={optionsCategoryCascader}
            onChange={onChange}
            multiple
            maxTagCount="responsive"
            showCheckedStrategy={SHOW_CHILD}
          />
          <TextArea placeholder="Mô tả" size="large" rows={9} />
        </div>
      </>
    );
}