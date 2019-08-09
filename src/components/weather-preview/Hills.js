import React from 'react'
import styles from './Hills.module.scss'

export default function Hills(props) {
  return (
    <div className={props.isDay ? styles.day : null}>
      <div className={styles.hillBg1} />
      <div className={styles.hillBg2} />
      <div className={styles.hillFg1} />
      <div className={styles.hillFg2} />
      <div className={styles.hillFg3} />
    </div>
  )
}