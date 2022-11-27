import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'


function Hero() {
  return (
    <div className="scrollbar-hide">
      <div className="bg-[url('/wallpapers/L1.jpeg')] bg-fixed bg-cover h-screen">
        <Navbar />
      </div> 

      <div className="h-screen bg-slate-200">

      </div>
    </div>
  )
}

export default Hero