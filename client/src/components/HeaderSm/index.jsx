import React from 'react'
import {SearchField,ActionButton} from "@adobe/react-spectrum";
import ShowMenu from "@spectrum-icons/workflow/ShowMenu";
import Search from "@spectrum-icons/workflow/Search";
export default function HeaderSm() {
    let menuItems = [
        {name: 'Trang chủ'},
        {name: 'Phim lẻ'},
        {name: 'Phim bộ'}
      ];
    const [isOpenMenu,setOpenMenu] = React.useState("hidden"); 
    const [isOpenSearch,setOpenSearch] = React.useState("hidden");  
    
    let Setting = "Navigation font-semibold text-base hover:text-red-500"
  return (
    <div className="Header lg:hidden">
        <div className="grid grid-cols-5 gap-4 place-items-center">
            <div className=" sm:py-4 xs:p-2 sm:w-5 md:py-6 md:w-5">
            <ActionButton onPress={() => isOpenMenu==="hidden" ? setOpenMenu("absolute") : setOpenMenu("hidden") }>
                <ShowMenu/>
            </ActionButton>
            </div>
            <div className="Logo md:p-6 sm:p-4 xs:p-2 col-span-3 text-center">
            <span className=" font-semibold text-3xl tracking-tight uppercase text-transparent cursor-pointer bg-clip-text bg-gradient-to-r from-[#e50914] to-red-500 md:text-center">
                SAGO
            </span>
            </div>
            <div className="Seach sm:py-4 xs:p-2 sm:w-5 md:py-6 md:w-5">
                <ActionButton onPress={()=> isOpenSearch==="hidden" ? setOpenSearch("absolute") : setOpenSearch("hidden")}>
                    <Search/>
                </ActionButton>
            </div>
        </div>
        <div className={isOpenMenu+" rounded-md xs:min-w-[85%] xs:mx-[7.5%]  sm:mx-[7.5%] sm:my=0 sm:min-w-[85%] md:m-0 md:py-[2%] md:mx-[7.5%] md:min-w-[85%]  bg-zinc-800 flex flex-col"}>
        {menuItems.map((item,key)=>{
                return(
                    <span className="min-w-full p-2" key={key}>
                        <a href="/#" className={Setting}>{item.name}</a>
                    </span>
                )
            })}
        </div>
        <div className={isOpenSearch+" flex justify-end min-w-full sm:px-[5%] xs:px-[5%]"}>
            <SearchField/>
        </div>
    </div>
  )
}
