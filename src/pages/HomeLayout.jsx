import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function HomeLayout() {
  return (
    <>
      <Outlet/>
      <div className='max-w-6xl mx-auto'>
        <Navbar/>
        
      </div>
    </>
  )
}

export default HomeLayout
