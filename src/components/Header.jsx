import React from 'react'
import '../assets/css/header.scss'
import HeaderSlika from "./HeaderSlika";
import Poruke from '../components/Poruke'


const Header = () => {
    return(
        <div className='header'>

            <HeaderSlika />

            <Poruke />

        </div>
    )
}
export default Header