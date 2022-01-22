import type { NextPage } from 'next'
import {Start} from '../components'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div >
    
      <main className={styles.main}>
        <h1 className={styles.title}>
          Escolha seu avatar!
        </h1>
      <Start></Start>

      
      </main>

      <footer className={styles.footer}>
       </footer>
    </div>
  )
}

export default Home
