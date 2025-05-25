import React from 'react'
import Header from '../Common/Header'
// import Footer from '../Common/Footer'
import Categories from '../Common/Categories'
import HeroSection from '../Common/HeroSection'
import SubHero from '../Common/SubHero'
import TrendingProducts from '../Shop/TrendingProducts'
// import categories from '../Home/categories'

const UserLayout = () => {
  return (
    <>
    {/* header */}
    <Header/>
  
    {/* main */}
    <Categories/>   
    <HeroSection/>
    <SubHero/>
    <TrendingProducts/>
    {/* footer */}
    {/* <Footer/> */}
    </>
  )
}

export default UserLayout