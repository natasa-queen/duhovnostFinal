import React from 'react'
import Navigacija from "./Navbar";
import Footer from '../components/Footer'
import '../assets/css/layout.scss'


const Layout = ({ children }) => {
    return(
        <>
          <Navigacija />

          <div className='kontejner' >
              {children}
          </div>

          <Footer />
        </>
    )
}
export default Layout