import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div className="hide-scrollbar">
      <Hero />
    </div>
  )
}