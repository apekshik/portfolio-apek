import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'

function Navbar() {
  return (
    <>
      <nav class="absolute w-full p-5">
        {/* Flex container for NavBar */}
        <div class="flex items-center justify-between">
          {/* Menu Bar button */}
          <FiMenu size={30}/>

          {/* Menu items - The 'hidden' keyword makes the div hidden 
          first when the window hits the medium size breakpoint */}
          <div class="hidden md:flex space-x-12 font-semibold text-[#154866">
            <Link href="">Home</Link>
            <Link href="">About</Link>
            <Link href="">Blog</Link>
            <Link href="">Portfolio</Link>
            <Link href="">Contact</Link>
          </div>

          {/* Download Resume Button */}
          <div class="hidden md:flex">
            <a class="flex border border-[#154866] rounded-[5px] p-2 items-center gap-2  text-[#154866] font-semibold
                hover:bg-slate-500 hover:text-white hover:border-white
                transition duration-1000"> Download Resume </a>
          </div>

          
        </div> {/* End of flex container for Navbar */}
      </nav>
    </>
  )
}

export default Navbar