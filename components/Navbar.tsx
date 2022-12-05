import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'

function Navbar() {
  return (
    <>
      <nav className="absolute w-full p-5">
        {/* Flex container for NavBar */}
        <div className="flex items-center justify-between">
          {/* Menu Bar button */}
          <FiMenu size={30}/>

          {/* Menu items - The 'hidden' keyword makes the div hidden 
          first when the window hits the medium size breakpoint */}
          <div className="hidden md:flex space-x-16 font-semibold text-[#08414d] ">
            <Link href="">Home</Link>
            <Link href="">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="">Portfolio</Link>
            <Link href="">Contact</Link>
            <Link href="">Live Projects</Link>
          </div>

          {/* Download Resume Button */}
          <div className="hidden md:flex">
            <a className="flex border border-[#154866] rounded-[5px] p-2 items-center gap-2  text-[#154866] font-semibold
                hover:bg-slate-500 hover:text-white hover:border-white
                transition duration-1000"> Download Resume </a>
          </div>

          
        </div> {/* End of flex container for Navbar */}
      </nav>
    </>
  )
}

export default Navbar