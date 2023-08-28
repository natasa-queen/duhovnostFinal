import React from 'react'
import Navigacija from "./Navbar";
import '../assets/css/layout.scss'


const Layout = ({ children }) => {
    return(
        <>
            <Navigacija />

            <div className='kontejner' >
                {children}
            </div>

        </>
    )
}
export default Layout