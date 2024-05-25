import React from 'react'
import { Outlet } from 'react-router-dom'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function HomeLayout() {
  return (
    <>
      <Outlet/>
      <div className='max-w-6xl mx-auto'>
        <Navbar/>
        <Hero/>
      </div>
    </>
  )
}

export default HomeLayout
