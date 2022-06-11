import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import { Input, Tag } from 'antd'
import  adminQuery from '../AdminQuery'
import { useQuery } from "@apollo/client"
import Loading from '../../../components/Loading';
import SeasonTable from '../component/SeasonTable';
import EpisodeTable from '../component/EpisodeTable'
const { TextArea } = Input;
export default function ViewAllFilm({filmId}){
    const navigate = useNavigate();
    const previPage = () => {
      navigate(-1)
    }
    const {data,loading} = useQuery(adminQuery.qGetDetailFilm,{variables:{filmId},fetchPolicy : "cache-and-network"});
    if(loading) return <Loading/>
    return (
      <>
        <div
          style={{ backgroundColor: "#141414" }}
          className="min-h-screen flex justify-center"
        >
          <div
            style={{ backgroundColor: "#191919" }}
            className="w-full m-8 rounded-xl"
          >
            <div className="header-content-admin">
              <span className="px-2 cursor-pointer" onClick={previPage} ><FontAwesomeIcon icon={faArrowLeft}/></span>
              Chi tiết phim {data.film.name}
            </div>
            <div className="flex justify-between mt-6 mx-6">
                <div className="w-[25%] h-fit flex flex-col">
                    <img src={data.film.img} alt="imgFilm" />
                    <span className="font-bold text-lg text-center m-4">
                        {data.film.name}
                    </span>
                </div>
                <div className="w-[75%] h-fit pl-8">
                    <div className='font-bold text-lg'>Tên phim:</div>
                    <Input className='!mb-4 !mt-2' placeholder={data.film.name} disabled size='large'></Input>
                    <div className='font-bold text-lg'>Đường dẫn ảnh:</div>
                    <Input className='!mb-4 !mt-2' placeholder={data.film.img} disabled size='large'></Input>
                    <div className='font-bold text-lg'>Loại phim: </div>
                    <Input className='!mb-4 !mt-2' placeholder={data.film.filmType.name} disabled size='large'></Input>
                    <div className='font-bold text-lg !mb-2'>Thể loại: </div>
                    {data.film.genres.map((genre,key)=>{
                        return (
                            <Tag className='!mb-4'color={"magenta"} key={genre.name}>
                                {genre.name}
                            </Tag>
                        )
                    })}
                    <div className='font-bold text-lg'>Mô tả:</div>
                    <TextArea className='!mb-4 !mt-2' placeholder={data.film.description} disabled size='large' rows={9} />
                </div>
            </div>
            <div className='mx-6 mt-4'>
              {data.film.filmType.name === "Movie" ? <EpisodeTable episodeId={data.film.filmDetail.episode?.id}/>
              :
              <SeasonTable filmDetailId={data.film.filmDetail?.id}/>}
            </div>
          </div>
        </div>
      </>
    );
}