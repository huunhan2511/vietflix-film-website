import React,{useState} from 'react'
import { MultiSelect } from "react-multi-select-component";
import { ACCESS_DENIED,MULTI_SELECT_GENRE } from '../../constant';
import Query from '../../query'
import { useQuery } from '@apollo/client';
const tvShowDefault = 
    {
        nameTvShow: "",
        genres : [],
        img: "",
        description : "",
    }
const TvShowInformation = ({nextStep,tvShow=tvShowDefault, handleChangeInput = () =>{}}) => {
    const [options,setOptions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const {loading} = useQuery(Query.qGenre,{fetchPolicy: "no-cache", onCompleted: (data)=>{
        let temp = []
        data.genres.forEach(item => {
            temp.push({
                value: item.id,
                label: item.name
            })
        });
        setOptions(temp)
    }});
    const handleSelectGenre = (selected) =>{
        if(selectedOptions.length === options.length) return;
        setSelectedOptions(selected)
    }
    return (
    <>
        <div className='w-full flex'>
            <label className='w-44 p-5 bg-red-700'>Tên phim</label>
            <input 
                className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' 
                name="nameTvShow" 
                defaultValue={tvShow.nameTvShow}
                onChange={handleChangeInput}
            />
        </div>
        <div className='w-full flex'>
                <label className='w-44 p-5 bg-red-700'>Thể loại</label>
                <MultiSelect className='p-3 !bg-[#191919] border border-zinc-700 w-full'
                    options={options}
                    value={selectedOptions}
                    onChange={handleSelectGenre}
                    overrideStrings = {MULTI_SELECT_GENRE}
                />
        </div>
        <div className='w-full flex'>
            <label className='w-44 p-5 bg-red-700'>Link hình</label>
            <input 
                className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' 
                name="img" 
                defaultValue={tvShow.img}
                onChange={handleChangeInput}
            />
        </div>
        <div className='w-full flex'>
            <label className='w-44 p-5 bg-red-700'>Nội dung</label>
            <textarea className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' name="description"
                defaultValue={tvShow.description}
                onChange={handleChangeInput}
            />
        </div>
        <div className='text-white flex justify-end mt-5'>
            <button className='!px-10 py-4 bg-red-700 rounded-md button-update' onClick={nextStep}>Tiếp</button>
        </div>
    </>
  )
}

export default TvShowInformation