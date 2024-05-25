import React from 'react'

function Carousel() {
  return (
    <div>
      <div className="carousel carousel-center max-w-xl p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item w-80">
          <img className="" src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp" className="rounded-box" />
        </div> 
        <div className="carousel-item w-80">
          <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp" className="rounded-box" />
        </div> 
        <div className="carousel-item w-80">
          <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp" className="rounded-box" />
        </div> 
        <div className="carousel-item w-80">
          <img src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp" className="rounded-box" />
        </div> 
      </div>
    </div>
  )
}

export default Carousel
