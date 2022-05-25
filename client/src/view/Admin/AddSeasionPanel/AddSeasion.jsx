import React from 'react'
import { Input, Cascader } from 'antd'
const { SHOW_CHILD } = Cascader;
const optionsEpisodeCascader = [
    {
      label: 'Tập 1',
      value: 'ep1',
    },
    {
      label: 'Tập 2',
      value: 'ep2',
    },
    {
      label: 'Tập 3',
      value: 'ep3',
    },
  ];
const onChange = value => {
    console.log(value);
};
export function AddSeasion() {
    
    return (
        <>
            <div style={{backgroundColor: '#191919'}} className='w-full h-fit mt-4 mr-4 rounded-xl'>
                <div className='header-content-admin'>Thêm mùa TvShow</div>
                <div className='flex flex-col items-center m-auto w-[90%]'>
                    <Input placeholder='Tên mùa phim' size='large'></Input>
                    <Input placeholder='time' size='large' type={'date'}></Input>
                    <Cascader
                    style={{
                        width: '100%',
                        marginTop: '1.5rem'
                    }}
                    size='large'
                    placeholder='Tập phim'
                    options={optionsEpisodeCascader}
                    onChange={onChange}
                    multiple
                    maxTagCount="responsive"
                    showCheckedStrategy={SHOW_CHILD}/>
                    <button className='btn-admin mb-6'> Thêm mùa </button>
                </div>
            </div>
        </>
    )
}