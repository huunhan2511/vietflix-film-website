import React from 'react'
import {faBars,faSearch,faChevronDown} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../../img/320x80.png";
import { Link,useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Query from '../../query';

export default function HeaderSm() {
    const genres = useQuery(Query.qGenre);

    const navigate = useNavigate();
    let menuItems = [
        {name: 'Trang chủ',path:"/"},
        {name: 'Phim lẻ',path:"/phim-le"},
        {name: 'Phim bộ',path:"/phim-bo"}
      ];
    const [isOpenMenu,setOpenMenu] = React.useState("hidden"); 
    const [isOpenSearch,setOpenSearch] = React.useState("hidden");  
    let [currentSearch, setCurrentSearch] = React.useState();
  const onInputChange = event => {
    setCurrentSearch(event.target.value)
  }
  const submitSearch = ()=>{
    navigate("/tim-kiem",{state:{inputSearch : currentSearch}})
  }
    let Setting = "Navigation font-semibold text-base hover:text-yellow-300 px-2 text-white"
    if(genres.loading) return <></>
  return (
    <div className="Header lg:hidden">
        <div className="grid grid-cols-5 gap-4 place-items-center">
            <div className=" p-3 sm:py-4 xs:p-2 sm:w-5 md:py-6 md:w-5">
                <FontAwesomeIcon icon={faBars} onClick={() => isOpenMenu==="hidden" ? setOpenMenu("absolute") : setOpenMenu("hidden") }/>
            </div>
            <div className="Logo md:p-6 sm:p-3 xs:p-2 col-span-3 text-center sm:w-60 xs:w-48 w-44">
                <Link to="/">
                    <span>
                        <img src={logo} alt="logo" />
                    </span>
                </Link>
            </div>
            <div className="Search sm:py-4 xs:p-2 sm:w-5 md:py-6 md:w-5">
                <FontAwesomeIcon icon={faSearch} onClick={()=> isOpenSearch==="hidden" ? setOpenSearch("absolute") : setOpenSearch("hidden")}/>
            </div>
        </div>
        <div className={isOpenMenu+" rounded-md min-w-full xs:min-w-[85%] xs:mx-[7.5%]  sm:mx-[7.5%] sm:my=0 sm:min-w-[85%] md:m-0 md:py-[2%] md:mx-[7.5%] md:min-w-[85%]  bg-zinc-800 flex flex-col"}>
        {menuItems.map((item,key)=>{
                return(
                    <span className="min-w-full p-2" key={key}>
                        
                    <Link to={item.path}>
                        <p className={Setting}>{item.name}</p>
                    </Link>
                    </span>
                )
            })}
            <div className='dropdown'>
              <button className="text-white py-2 px-4 inline-flex items-center hover:text-yellow-300">
                <span className="mr-1 font-semibold">Thể loại</span>
                <FontAwesomeIcon icon={faChevronDown}/>
              </button>
              <ul className="dropdown-menu hidden text-white bg-zinc-800 pt-1 max-h-[50vh] overflow-auto">
                {
                  genres.data.genres.map((genre,key) => {
                    return (
                      <li key={key}><a className="rounded-t font-semibold bg-zinc-800 hover:text-yellow-300 py-2 px-4 block whitespace-no-wrap" href="#"> + {genre.name}</a></li>
                    )
                  })
                }
              </ul>
            </div>
        </div>
        <form className={isOpenSearch+" flex justify-end min-w-full px-[5%] sm:px-[5%] xs:px-[5%]"} onSubmit={submitSearch}>
            <input placeholder="Tìm kiếm..." required="" type="text" className='!bg-black p-4 text-white' onChange={onInputChange}/>
        </form>
    </div>
  )
}
