// Test.tsx simply exists for testing small tsx code that allows us to 
// buildi the actual website correctly. Simply adding it to 

import Head from 'next/head'
import Image from 'next/image'
import styles from './Test.module.css'

export default function Test() {
  return (
      <div className="h-screen bg-gray-500 p-4">
        <Head>
          <title>Test Page</title>
        </Head>
        {/* use z-[x] bracket operator for negative AND positive z-index vales.  */}
        <img src="wallpapers/L1.jpeg" className="absolute top-0 left-0 w-full"></img>
        <div className="flex">
          <div className="flex bg-red-500">One</div>
          <div className="flex w-full bg-green-500">Two</div>
        </div>
      </div>
  )
}

