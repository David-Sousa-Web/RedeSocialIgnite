import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img 
        src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
        alt="" 
        className={styles.cover}
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/57757828?v=4" />

        <strong>David Sousa</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine  size={20}/>
          Editar seu perfil
        </a>
      </footer>    
    </aside>
  )
}