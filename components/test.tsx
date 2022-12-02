import Image from 'next/image'
import styles from './Test.module.css'

export default function Test() {
  return (
      <div class="absolute w-full bg-gray-500 p-4">
        Parent
        {/* use z-[x] bracket operator for negative AND positive z-index vales.  */}
        <div class="absolute w-full z-[2] top-1 bg-red-500">One</div>
        <div class="absolute z-[3] top-[10px] bg-green-400">Two</div>
      </div>
  )
}

