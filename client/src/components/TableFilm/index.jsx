import React, {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import Query from '../../query'
import { TYPE_FILM } from '../../constant';

export default function TableFilm({data,title,functionButton}) { 
    const [films,] = useState(data)
    const navigate = useNavigate()
    const searchInput = useRef(null);
    const editMovie = (id) =>{
      navigate(`/admin/sua-phim-le/${id}`,{state:{idFilm:id}})
    }
    const editTvShow = (id) =>{
      console.log("edit tv show")
    }
    const getGenres = (film) =>{
      let genres = ""
      film.genres.map((item) => {
        genres += item.name+", "
        return genres
      })
      return genres.slice(0,-2)+'.'
    }
    return (
      <>
        <div
          style={{ backgroundColor: "#141414" }}
          className="flex justify-center min-h-screen"
        >
          <div
            style={{ backgroundColor: "#191919" }}
            className="w-full m-8 rounded-xl"
          >
            <div className="header-content-admin text-white flex justify-between">
              <div>{title}</div>
              {
                functionButton 
                && 
                <div>
                <button 
                className='bg-red-700 px-5 py-2 rounded-xl text-xl' 
                onClick={()=>functionButton()}>
                  Thêm phim
                </button>
              </div>
              }
            </div>
            <div className="m-4 h-auto">
              <table className='text-white min-w-full border-collapse border-slate-700 border'>
                <thead className='bg-red-700 text-black w-100'>
                  <tr className='w-100'>
                    <th className='p-4'>Hình ảnh</th>
                    <th>Tên phim</th>
                    <th>Thể loại</th>
                    <th>Chức năng</th>
                  </tr>
                </thead>
                <tbody >
                  {films.map((film,key)=>{
                    return(
                    <tr key={key} className='text-white'>
                      <td className='w-52 h-52 border-slate-700 border'><img style={{ width: '13rem', height: '13rem' }} src={film.img}/></td>
                      <td className='p-4 border-slate-700 border min-w-[25rem] max-w-[25rem] break-words'>{film.name}</td>
                      <td className='p-4 border-slate-700 border min-w-[15rem] max-w-[15rem] break-words'>
                        {getGenres(film)}
                      </td>
                      <td className='grid grid-cols-2 gap-4 place-items-center h-56 p-4 border-slate-700 border justify-center'>
                        {
                          film.filmType.name === TYPE_FILM.Movie
                          ? 
                          <button className='bg-green-500 px-8 py-2 rounded-full' onClick={()=>editMovie(film.id)}>Sửa</button>
                          :
                          <button className='bg-green-500 px-8 py-2 rounded-full' onClick={()=>editTvShow(film.id)}>Sửa</button>
                        }
                        {
                          film.filmType.name === TYPE_FILM.Movie
                          ?
                          <button className='bg-red-700 px-8 py-2 rounded-full'>Xóa</button>
                          :
                          <button className='bg-red-700 px-8 py-2 rounded-full'>Xóa</button>
                        }
                      </td>
                    </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
}
