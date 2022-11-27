import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <>
      <nav className="relative container p-5">
        {/* Flex container for NavBar */}
        <div className="flex items-center justify-between">
          {/* Menu Bar button */}
          <div className="flex pt-2">
            <Image src="/assets/icons8-menu-bar-64.png" width={40} height={40} alt="" />
          </div>
          {/* Menu items */}
          {/* The hidden keyword makes the div hidden first when the window hits the medium size breakpoint */}
          <div className="hidden md:flex space-x-12">
            <Link href="">Home</Link>
            <Link href="">About</Link>
            <Link href="">Portfolio</Link>
            <Link href="">Contact</Link>
          </div> {/* End Menu Items */}

          {/* Download Resume Button */}
          <div className="hidden md:flex">
            <a className="flex border rounded-[5px] p-2 items-center gap-2 
                hover:bg-red-100 hover:text-red-400
                transition duration-200"> Download Resume </a>
          </div>
        </div> {/* End of flex container for Navbar */}
      </nav>
    </>
  )
}

export default Navbar