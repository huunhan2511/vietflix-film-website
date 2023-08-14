
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@apollo/client';
import Query from '../../query';

const DropdownGenre = () => {
  const genres = useQuery(Query.qGenre);
  if(genres.loading) return <></>;
  console.log(genres.data)
  return (
    <div class="dropdown font-semibold hover:text-yellow-300 cursor-pointer">
      <button class="text-white py-2 px-4 inline-flex items-center">
        <span class="mr-1">Thể loại</span>
        <FontAwesomeIcon icon={faChevronDown}/>
      </button>
      <ul class="dropdown-menu absolute hidden text-white bg-black pt-1">
        {
          genres.data.genres.map((genre,key) => {
            return (
              <li key={key}><a class="rounded-t bg-black hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">{genre.name}</a></li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default DropdownGenre;
