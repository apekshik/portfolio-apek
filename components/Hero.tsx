import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import TypeWriter from 'typewriter-effect'

function Hero() {
  return (
    <div>
      {/* class="bg-[url('/wallpapers/L1.jpeg')] bg-fixed bg-cover h-screen w-full" */}
      <div class="bg-[url('/wallpapers/L1.jpeg')] bg-fixed bg-cover h-screen w-full">

        <Navbar/>

        <div class="relative items-center z-0 text-white flex flex-col">
            <h1 class="text-6xl"> Apekshik Panigrahi </h1>
            <h4 class="text-3xl mt-3">
              <TypeWriter 
                options={{
                  strings: [
                    "iOS Developer",
                    "NextJS and Tailwind CSS",
                    "Firebase and GCP",
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

      
      {/* Slide-over screen */}
      <div class="h-screen bg-slate-200">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cumque eligendi fugit. 
          Corrupti voluptatibus repudiandae ratione natus, dolores quibusdam alias quam sapiente 
          doloremque. Dolores itaque consequatur veritatis voluptate illum omnis impedit at deleniti! 
          Corrupti enim optio aliquid laboriosam, soluta suscipit, aperiam iure dolorem modi sed libero 
          illum deserunt iste officiis ratione doloremque rem quia odio repellat consequuntur expedita
          voluptates quibusdam voluptatibus! Commodi eius ab delectus eos, blanditiis alias ex voluptatum! 
          Rerum dicta laudantium recusandae ea vitae libero excepturi a nisi quam. Excepturi a adipisci 
          ex quae mollitia accusamus sequi quo, fugit, suscipit maxime eos velit eius fugiat veniam 
          saepe? Soluta suscipit adipisci quisquam, ut totam doloremque ipsa molestias atque, accusamus 
          blanditiis fugiat sapiente aperiam sit impedit ex cupiditate consequuntur quis. Unde sapiente, 
          ullam ab architecto necessitatibus animi cumque, numquam voluptatibus placeat sed, iste aperiam? 
          Laborum deserunt magnam perspiciatis. Veritatis, dolores debitis perspiciatis similique saepe 
          esse delectus necessitatibus possimus quae numquam dignissimos rem vel iusto minima, fuga 
          repellendus corporis odit nulla est, non porro. Et, expedita commodi ratione omnis aliquam 
          repudiandae? Dolorum sit exercitationem aperiam numquam at praesentium. Rem at dicta, distinctio 
          expedita amet vero autem!
        </p>
      </div>
    </div>
  )
}

export default Hero