
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@apollo/client';
import Query from '../../query';

const DropdownGenre = () => {
  const genres = useQuery(Query.qGenre);
  if(genres.loading) return <><div>Thể loại</div></>;
  return (
    <div className="dropdown font-semibold hover:text-yellow-300 cursor-pointer">
      <div className="text-white py-2 px-4 inline-flex items-center">
        <span className="mr-1">Thể loại</span>
        <FontAwesomeIcon icon={faChevronDown}/>
      </div>
      <ul className="dropdown-menu absolute hidden text-white bg-zinc-800 px-3 py-4 max-h-[50vh] max-w-xs overflow-auto rounded-lg">
        {
          genres.data.genres.map((genre,key) => {
            return (
              <li key={key}><a className="rounded-t bg-zinc-800 hover:text-yellow-300 py-2 px-4 block whitespace-no-wrap" href="#">{genre.name}</a></li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default DropdownGenre;
