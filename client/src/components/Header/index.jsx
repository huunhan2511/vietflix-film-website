import React from 'react'
import {SearchField} from "@adobe/react-spectrum";
export default function Header() {
    let Setting = "Navigation font-semibold text-base hover:text-red-500 cursor-pointer"
    let menuItems = [
        {name: 'Trang chủ'},
        {name: 'Phim lẻ'},
        {name: 'Phim bộ'}
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
                        <a className={Setting}>{item.name}</a>
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
