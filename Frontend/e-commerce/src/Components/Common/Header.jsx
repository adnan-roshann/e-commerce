import React from 'react'
import Topbar from '../Layout/Topbar'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header>
        {/* Topbar */}
        <Topbar/>
        {/* Navbar */}
        <NavBar/>
        {/* Cart drawer */}
    </header>
  )
}

export default Header