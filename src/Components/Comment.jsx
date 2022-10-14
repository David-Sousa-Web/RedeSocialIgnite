import styles from './Comment.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title='28 de setembro as 08:00' dateTime='2022-05-11 07:13:30'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar Comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!!</p>
        </div>
        
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}