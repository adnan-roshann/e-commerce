                                                                import React, { useState } from 'react'
                                                                import {TbBrandMeta} from "react-icons/tb"
                                                                import {IoLogoInstagram} from "react-icons/io"
                                                                import {RiTwitterXLine} from "react-icons/ri"
                                                                import SearchBar from '../Common/SearchBar'
                                                                import NavBar from '../Common/NavBar'
                                                                import { Link } from 'react-router-dom'
                                                                import {HiOutlineUser , HiOutlineShoppingBag} from "react-icons/hi2"
                                                                
                                                                
                                                                  import CartDrawer from './CartDrawer'

                                                                const Topbar = () => {
                                                                   const [drawerOpen,setDrawerOpen]= useState(false);

                                                                  const toggleCartDrawer = ()=> {
                                                                   setDrawerOpen(!drawerOpen);
                                                                          } ;
                                                                  return (
                                                                    <div className='bg-[#FFF9F3] text-white '>
                                                                        <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
                                                                        {/* left -logo */}
                                                                         <div className='text-2xl text-[#EB6D20] font-medium'>
                                                                            E-commerce
                                                                        </div>
                                                                        {/* center */}
                                                                <div className="w-[80%] mx-auto justify-between flex  px-2 py-3">
                                                                  <div className=" sm:w-[200px] justify-between
                                                                mx-auto md:w-[50%] flex items-center bg-white rounded-lg overflow-hidden shadow-sm">
                                                                    {/* Select Dropdown (Left) */}
                                                                    <select className="bg-gray-100 text-black px-2 py-2 outline-none border-r rounded-lg border-gray-300">
                                                                      <option value="all">All categories</option>
                                                                      <option value="title">Title</option>
                                                                      <option value="author">Author</option>
                                                                    </select>

                                                                    {/* Input Field (Middle) */}
                                                                    <input
                                                                      type="text"
                                                                      placeholder="Search anything"
                                                                      className="flex-1 px-3 py-2 outline-none text-black bg-white"
                                                                    />

                                                                    {/* Search Button (Right) */}
                                                                    <button className="px-4 py-2 hover:bg-gray-100 text-black">
                                                                      <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="h-5 w-5"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                      >
                                                                        <path
                                                                          strokeLinecap="round"
                                                                          strokeLinejoin="round"
                                                                          strokeWidth="2"
                                                                          d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 103.75 3.75a7.5 7.5 0 0012.9 12.9z"
                                                                        />
                                                                      </svg>
                                                                    </button>

                                                                  </div >
                                                                  <div className=' pl-2'>
                                                                    <button className="bg-[#EB6D20] hover:bg-[#ffb688] text-white border border-[#1b130e] px-4 py-2 rounded-lg  ">
                                                                  Help
                                                                </button>

                                                                
 



                                                                  </div>

                                                                      <div className='flex items-center space-x-4 text-black pl-3' >
                                                                  <Link to="/profile" className='hover:text-black'>
                                                                  <HiOutlineUser className='h-6 w-6 text-gray-700'/>
                                                                  </Link>
                                                                  
                                                                  Account
                                                                  <button onClick={toggleCartDrawer} className='relative hover:text-black pl-3'>
                                                                    <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
                                                                    <span className='absolute -top-2 bg-[#EB6D20]  text-white text-xs rounded-full  px-2 py-0.5'>12</span>
                                                                   </button>
                                                                  <span className='pl-5'>shopping</span> 

                                                                </div>
                                                                  
                                                                </div>

                                                                  
                                                                    </nav>
                                                                    <CartDrawer drawerOpen={drawerOpen}toggleCartDrawer={toggleCartDrawer} />
                                                                    <div className='hidden md:flex space-x-6 pl-30'>
                                                                          <Link to="#" className='text-gray-700   hover:text-black text-sm font-medium uppercase'>
                                                                          jewelry&Accessories
                                                                          </Link>
                                                                           <div className='hidden md:flex space-x-6 pl-10'>
                                                                          <Link to="#" className='text-gray-700   hover:text-black text-sm font-medium uppercase'>
                                                                          Clothing&Shoe
                                                                          </Link>
                                                                        </div>
                                                                           <div className='hidden md:flex space-x-6 pl-15'>
                                                                          <Link to="#" className='text-gray-700   hover:text-black text-sm font-medium uppercase'>
                                                                          Home&living
                                                                          </Link>
                                                                        </div>
                                                                           <div className='hidden md:flex space-x-6 pl-15'>
                                                                          <Link to="#" className='text-gray-700   hover:text-black text-sm font-medium uppercase'>
                                                                          Wedding&Party
                                                                          </Link>
                                                                        </div>
                                                                           <div className='hidden md:flex space-x-6 pl-15'>
                                                                          <Link to="#" className='text-gray-700   hover:text-black text-sm font-medium uppercase'>
                                                                          Clothing&Shoe
                                                                          </Link>
                                                                        </div>
                                                                           <div className='hidden md:flex space-x-6 pl-15'>
                                                                          <Link to="#" className='text-gray-700   hover:text-black text-sm font-medium uppercase'>
                                                                          Clothing&Shoe
                                                                          </Link>
                                                                        </div>
                                                                        
                                                                        
                                                                        </div>
                                                                   
                                                                       

                                                                    </div>
                                                                  )
                                                                }

                                                                export default Topbar