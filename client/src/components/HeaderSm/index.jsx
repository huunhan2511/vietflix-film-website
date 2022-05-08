import React from 'react'
import {SearchField,ActionButton} from "@adobe/react-spectrum";
import ShowMenu from "@spectrum-icons/workflow/ShowMenu";
import Search from "@spectrum-icons/workflow/Search";
import logo from "../../img/320x80_black.png";
import { Link } from 'react-router-dom';
export default function HeaderSm() {
    let menuItems = [
        {name: 'Trang chủ',path:"/"},
        {name: 'Phim lẻ',path:"/phim-le"},
        {name: 'Phim bộ',path:"/phim-bo"}
      ];
    const [isOpenMenu,setOpenMenu] = React.useState("hidden"); 
    const [isOpenSearch,setOpenSearch] = React.useState("hidden");  
    
    let Setting = "Navigation font-semibold text-base hover:text-red-500 px-2"
  return (
    <div className="Header lg:hidden">
        <div className="grid grid-cols-5 gap-4 place-items-center">
            <div className=" p-3 sm:py-4 xs:p-2 sm:w-5 md:py-6 md:w-5">
            <ActionButton onPress={() => isOpenMenu==="hidden" ? setOpenMenu("absolute") : setOpenMenu("hidden") }>
                <ShowMenu/>
            </ActionButton>
            </div>
            <div className="Logo md:p-6 sm:p-3 xs:p-2 col-span-3 text-center sm:w-60 xs:w-48 w-44">
                <Link to="/">
                    <span>
                        <img src={logo} alt="logo" />
                    </span>
                </Link>
            </div>
            <div className="Seach sm:py-4 xs:p-2 sm:w-5 md:py-6 md:w-5">
                <ActionButton onPress={()=> isOpenSearch==="hidden" ? setOpenSearch("absolute") : setOpenSearch("hidden")}>
                    <Search/>
                </ActionButton>
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
        </div>
        <div className={isOpenSearch+" flex justify-end min-w-full px-[5%] sm:px-[5%] xs:px-[5%]"}>
            <SearchField/>
        </div>
    </div>
  )
}
