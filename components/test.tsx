import Image from 'next/image'
import styles from './Test.module.css'

export default function Test() {
  return (
    <div class={styles.parent}>
      Parent
      {/* <img src="wallpapers/L1.jpeg"></img> */}
      <div class={styles.child_one}>One</div>
      <div class={styles.child_two}>Two</div>
      <div class={styles.child_three}>Three</div>
    </div>
  )
}

