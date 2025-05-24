import React from 'react'
import Header from '../Common/Header'
// import Footer from '../Common/Footer'
import Categories from '../Common/Categories'
import HeroSection from '../Common/HeroSection'
// import categories from '../Home/categories'

const UserLayout = () => {
  return (
    <>
    {/* header */}
    <Header/>
  
    {/* main */}
    <Categories/>   
    <HeroSection/>
    {/* footer */}
    {/* <Footer/> */}
    </>
  )
}

export default UserLayout