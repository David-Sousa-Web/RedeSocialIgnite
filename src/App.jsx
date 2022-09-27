import { Header } from './Components/Header'
import { Post } from './Post'
import { Sidebar } from './Components/Sidebar'

import './Global.css'

import styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
  
}
