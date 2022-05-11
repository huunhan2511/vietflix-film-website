import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeaderSm from '../../components/HeaderSm';
export default function Mylayout({children}) {
  return ( 
    <div className="min-h-screen mx-auto content-between justify-between flex flex-col" >
        <div className="fixed top-0 z-50 min-w-full backdrop-blur right-0 left-0 shadow">
            <Header ></Header>
            <HeaderSm />
        </div>
        {children}
        <div>
            <Footer/>
        </div>
    </div>
  )
}
