import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import TypeWriter from 'typewriter-effect'

function Hero() {
  return (
    <div>
      {/* use this for class below if <img> gives you problems:
        "bg-[url('/wallpapers/L1.jpeg')] bg-fixed bg-cover h-screen w-full" */}

      {/* First page of home page */}
      <div className="">
        <img src="wallpapers/L1.jpeg" className="fixed w-full z-[-1] "></img>  
        
        <Navbar/>

        <div className="relative h-screen z-[1] text-[#0a354f] text-center top-[40vh]">
          <h1 className="text-4xl md:text-8xl font-semibold"> Apekshik Panigrahi </h1>
          <h4 className="text-2xl mt-3 md:text-4xl">
            <TypeWriter 
              options={{
                strings: [
                  "iOS Developer",
                  "NextJS, React, and Tailwind",
                  "Firebase, GCP, and AWS",
                  "Swift, C++, Python"
                ],
                changeDelay: 2, // Weirdly throws an error for the linter in VSCode. Ignore that.
                changeDeleteSpeed: 1,
                autoStart: true,
                loop: true,
              }} 
            />
          </h4>
        </div>
      </div> 

      
      {/* Second Page of Home Page*/}
      <div className="h-[50vh] bg-slate-200">
      </div>
    </div>
  )
}

export default Hero