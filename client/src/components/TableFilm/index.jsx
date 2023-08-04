import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { TYPE_FILM,ACCESS_DENIED, DELETE_MOVIE_SUCCESS } from '../../constant';
import { useMutation } from '@apollo/client';
import mutations from '../../mutations';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare,faTrashCan,faSearch} from "@fortawesome/free-solid-svg-icons"

export default function TableFilm({data,title,functionButton}) { 
    const [films,setFilms] = useState(data)
    const [filmsFilter, setFilmsFilter] = useState(data)
    const navigate = useNavigate()
    const [mutationDeleteFilm] = useMutation(mutations.deleteFilm,
      {onError : (error) => {
          if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
              localStorage.removeItem("token")
              navigate("/login-admin")
          }
          toast.error(error.graphQLErrors[0].message);
      }
    });
    const [mutationDeleteFilmDetail] = useMutation(mutations.deleteFilmDetail,
      {onError : (error) => {
          if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
              localStorage.removeItem("token")
              navigate("/login-admin")
          }
          toast.error(error.graphQLErrors[0].message);
      }
    });
    const [mutationDeleteEpisode] = useMutation(mutations.deleteEpisode,
      {onError : (error) => {
          if(error.graphQLErrors[0].extensions.code === ACCESS_DENIED){
              localStorage.removeItem("token")
              navigate("/login-admin")
          }
          toast.error(error.graphQLErrors[0].message);
      },
      onCompleted : (response) =>{
        handleUpdateTableMovie(response.deleteEpisode.id)
        toast.success(DELETE_MOVIE_SUCCESS);
      }
    });
    const editMovie = (id) =>{
      navigate(`/admin/sua-phim-le`,{state:{idFilm:id}})
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
    const handleDeleteMovie = (filmid, filmDetailId, episodeId) => {
          mutationDeleteFilm({
            variables: {input : filmid},
            context: {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            }
          })
          
          //Delete Film Detail
          mutationDeleteFilmDetail({
            variables: {input : filmDetailId},
            context: {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            }
          })
    
          // Delete Episode
          mutationDeleteEpisode({
            variables: {input : episodeId},
            context: {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            }
          })
      
    }
    const handleUpdateTableMovie = (episodeId) =>{
      setFilms(films.filter((film) => {
        return film.filmDetail.episode.id !== episodeId
      }))
    }
    const handleSearchChange = (e) =>{
      const listFilm = films
      if(e.target.value === '') setFilmsFilter(films);
      setFilmsFilter(listFilm.filter((film)=>{
        return film.name.toLowerCase().includes(e.target.value.toLowerCase())
      }))
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
            <div className='w-full flex px-5'>
              <label className='w-32 p-5 bg-red-700'>Tìm kiếm</label>
              <input  className='p-5 text-white bg-[#191919] border border-zinc-700 w-full' 
              name = "search"
              onChange={handleSearchChange}
              />
            </div>
            <div className="m-4 max-h-[73vh] overflow-auto">
              <table className='text-white min-w-full border-collapse border-slate-700 border'>
                <thead className='bg-red-700 text-white w-100 sticky top-[-1px] z-50'>
                  <tr className='w-100'>
                    <th className='p-4'>Hình ảnh</th>
                    <th>Tên phim</th>
                    <th>Thể loại</th>
                    <th>Chức năng</th>
                  </tr>
                </thead>
                <tbody >
                  {filmsFilter.map((film,key)=>{
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
                          <button className='button-edit' onClick={()=>editMovie(film.id)}>
                            Sửa
                            <FontAwesomeIcon icon={faPenToSquare} className='px-1'/>
                          </button>
                          :
                          <button className='button-edit' onClick={()=>editTvShow(film.id)}>
                            Sửa
                            <FontAwesomeIcon icon={faPenToSquare} className='px-1'/>
                          </button>
                        }
                        {
                          film.filmType.name === TYPE_FILM.Movie
                          ?
                          <button className='button-delete' onClick={()=>handleDeleteMovie(film.id,film.filmDetail.id,film.filmDetail.episode.id)}>
                            Xóa
                            <FontAwesomeIcon icon={faTrashCan} className='px-1'/>
                          </button>
                          :
                          <button className='button-delete'>
                            Xóa
                            <FontAwesomeIcon icon={faTrashCan} className='px-1'/>
                          </button>
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
