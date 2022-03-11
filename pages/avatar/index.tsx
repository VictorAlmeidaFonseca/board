import type { NextPage } from 'next'
import {Start} from '../../components'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div >
    
      <main className={styles.main}>
        <h2 className={styles.title}>
          Escolha seu avatar!
        </h2>
      <Start></Start>

      
      </main>

      <footer className={styles.footer}>
       </footer>
    </div>
  )
}

export default Home