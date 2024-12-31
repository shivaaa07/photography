import React from 'react'
import Header from './components/header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/footer/Footer'

const Layout = () => {

  const location = useLocation();
  // console.log(location.pathname);
  

  return (
    <>
        <Header />
        <Outlet />
        <div className={location.pathname === "/" ? "hidden" : "block"}>
        <Footer />
        </div>
    </>
  )
}

export default Layout
