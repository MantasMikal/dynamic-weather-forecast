import React from 'react'
import PropTypes from 'prop-types'
import { Cloud1, Cloud2 } from './Clouds'
import styles from './WeatherPreview.module.scss'

// TODO:
// Split components and css into different files

function Fall(props) {
  const { isSnowing } = props

  let rainSmall = []
  let rainMed = []
  let rainBig = []

  for (let i = 1; i < 12; i++) {
    rainSmall.push(
      <div key={`rainSmall${i}`} className={`${styles[`rainSmall${i}`]}`} />
    )
    rainMed.push(
      <div key={`rainMed${i}`} className={`${styles[`rainMed${i}`]}`} />
    )
    rainBig.push(
      <div key={`rainBig${i}`} className={`${styles[`rainBig${i}`]}`} />
    )
  }

  return (
    <div
      className={isSnowing ? styles.snowing : null}
      style={{ overflow: 'hidden' }}
    >
      {rainSmall}
      {rainMed}
      {rainBig}
    </div>
  )
}

function Hills(props) {
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

function Sun() {
  return (
    <div>
      <div className={styles.sun} />
    </div>
  )
}

function Moon() {
  return (
    <div>
      <div className={styles.moon}>
        <div className={styles.crater1} />
        <div className={styles.crater2} />
        <div className={styles.crater3} />
        <div className={styles.crater4} />
        <div className={styles.crater5} />
        <div className={styles.crater6} />
        <div className={styles.crater7} />
        <div className={styles.crater8} />
        <div className={styles.crater9} />
      </div>
    </div>
  )
}

function Clouds(props) {
  let clouds = []

  for (let i = 1; i <= props.cloudCount; i++) {
    clouds.push(
      <div key={`cloud1-${i}`} className={`${styles[`cloud1-${i}`]}`}>
        <Cloud1 />
      </div>
    )
    clouds.push(
      <div key={`cloud2-${i}`} className={`${styles[`cloud2-${i}`]}`}>
        <Cloud2 />
      </div>
    )
  }

  return (
    <div>
      <div className={styles.clouds}>{clouds}</div>
    </div>
  )
}

export default function WeatherPreview(props) {
  const { cloudCount, isDay, isSnowing } = props.weatherDetails
  return (
    <div
      className={
        isDay ? [styles.wrapper, styles.day].join(' ') : styles.wrapper
      }
    >
      {isDay ? <Sun /> : <Moon />}
      {props.isRaining ? <Fall isSnowing={isSnowing} /> : null}
      <Hills isDay={isDay} />
      {cloudCount && <Clouds cloudCount={cloudCount} />}
    </div>
  )
}


WeatherPreview.propTypes = {
  weatherDetails: PropTypes.object
}