import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'

function Hero() {
  return (
    <div>
      <div className="hero py-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Carousel/>
          <div>
            <h1 className="text-5xl font-bold">We are changing the way people shop</h1>
            <p className="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
            <button className="btn btn-primary"><a href="/products">Our Products</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
