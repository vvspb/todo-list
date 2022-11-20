import React from 'react'
import styles from './index.module.less'

export const Header: React.FC = () => {
  return (
    <article className={styles.article}>
        <header className={styles.articleHeader}>
            <h1>TODO APP</h1>
        </header>
    </article>
  )
}

