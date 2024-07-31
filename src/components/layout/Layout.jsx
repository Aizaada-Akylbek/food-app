import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div>
        <Header/>
        <div style={{paddingTop:95}}>
        <Outlet/>
        </div>
       
        {/* Outlet ке башка барактар дагы келип тушуп турат */}
    
    </div>
  )
}

export default Layout