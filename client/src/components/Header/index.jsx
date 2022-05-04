import React from 'react'
import {SearchField} from "@adobe/react-spectrum";
import { Link } from 'react-router-dom';
export default function Header() {
    let Setting = "Navigation font-semibold text-base hover:text-red-500 cursor-pointer"
    let menuItems = [
        {path: '/',name: 'Trang chủ'},
        {path:'/phim-le',name: 'Phim lẻ'},
        {path:'/phim-bo',name:'Phim bộ'}
      ];
  return (
    <div className="Header justify-between hidden lg:flex top-0 left-0 right-0 ">
        <div className="Logo p-4 w-64">
          <span className=" font-semibold text-3xl tracking-tight uppercase text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-[#e50914] to-red-500 md:text-center">
            SAGO
          </span>
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
            <SearchField isQuiet/>
        </div>
    </div>
    
  )
}
