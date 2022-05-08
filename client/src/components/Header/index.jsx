import React from 'react'
import {SearchField} from "@adobe/react-spectrum";
import { Link,useNavigate } from 'react-router-dom';
import logo from "../../img/320x80.png";
export default function Header() {
  const navigate = useNavigate();
  let Setting = "Navigation font-semibold text-base hover:text-red-500 cursor-pointer"
  let menuItems = [
      {path: '/',name: 'Trang chủ'},
      {path:'/phim-le',name: 'Phim lẻ'},
      {path:'/phim-bo',name:'Phim bộ'}
    ];
  let [currentSearch, setCurrentSearch] = React.useState('');
  const submitSearch = ()=>{
    navigate("/tim-kiem",{state:{inputSearch : currentSearch}})
  }
  return (
    <div className="Header justify-between hidden lg:flex top-0 left-0 right-0 ">
        <div className="Logo p-2 w-48">
          <Link to="/">
          <span>
            <img src={logo} alt="logo" />
          </span>
          </Link>
        </div>
        <div className="Nav grid gap-5 grid-cols-3 p-4 ">
            {menuItems.map((item,key)=>{
                return(
                    <div className="text-center" key={key}>
                      <Link to={item.path}>
                        <span className={Setting}>{item.name}</span>
                      </Link>  
                    </div>
                )
            })}
        </div>
        <div className="Seach p-4 w-64 ">
            <SearchField isQuiet onChange={setCurrentSearch} onSubmit={submitSearch}/>
        </div>
    </div>
    
  )
}
