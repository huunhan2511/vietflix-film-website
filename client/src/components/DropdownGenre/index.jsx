
import React from 'react'
import { useQuery } from '@apollo/client';
import Query from '../../query';
import { useNavigate,useLocation } from 'react-router-dom';
const DropdownGenre = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const genres = useQuery(Query.qGenre);
  const handleSelectGenre = (title,genreId) =>{
    navigate('/the-loai',{state: {title:title,genreId:genreId}})
  }
  if(genres.loading) return <><div className="text-white py-2 px-4 inline-flex items-center">Thể loại</div></>;
  return (
    <div className="dropdown font-semibold hover:text-yellow-300 cursor-pointer">
      <div className="text-white py-2 px-4 inline-flex items-center" >
        <span className={location.pathname === "/the-loai" ? "mr-1 mt-[0.1rem] text-yellow-300" : "mr-1 mt-[0.1rem] text-white"}>Thể loại</span>
      </div>
      <ul className="dropdown-menu absolute hidden text-white lg:bg-[rgba(0,0,0,0.25)] bg-zinc-800 max-h-[57vh] max-w-xs overflow-auto rounded-lg">
        {
          genres.data.genres.map((genre,key) => {
            return (
              <li key={key}
                onClick={()=>handleSelectGenre(genre.name,genre.id)}
              >
                <p className="rounded-t text-no lg:bg-[rgba(0,0,0,0.25)] w-full h-full bg-zinc-800 hover:text-yellow-300 py-3 px-6 block whitespace-no-wrap">
                  {genre.name}
                </p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default DropdownGenre;
