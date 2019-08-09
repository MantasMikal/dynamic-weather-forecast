import React from 'react'
import styles from './Fall.module.scss'

export default function Fall(props) {
  const { isSnowing } = props

  let fallSmall = []
  let fallMed = []
  let fallBig = []

  for (let i = 1; i < 12; i++) {
    fallSmall.push(
      <div key={`fallSmall${i}`} className={`${styles[`fallSmall${i}`]}`} />
    )
    fallMed.push(
      <div key={`fallMed${i}`} className={`${styles[`fallMed${i}`]}`} />
    )
    fallBig.push(
      <div key={`fallBig${i}`} className={`${styles[`fallBig${i}`]}`} />
    )
  }

  return (
    <div
      className={isSnowing ? styles.snowing : null}
      style={{ overflow: 'hidden' }}
    >
      {fallSmall}
      {fallMed}
      {fallBig}
    </div>
  )
}