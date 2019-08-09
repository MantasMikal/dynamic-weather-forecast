import React from 'react'
import PropTypes from 'prop-types'
import cloud1 from '../../assets/cloud1.svg'
import cloud2 from '../../assets/cloud2.svg'
import cloud3 from '../../assets/cloud3.svg'
import styles from './Clouds.module.scss'

export function Cloud1() {
  return <img src={cloud1} alt="Cloud" />
}

export function Cloud2() {
  return <img src={cloud2} alt="Cloud" />
}

export function Cloud3() {
  return <img src={cloud3} alt="Cloud" />
}


export default function Clouds(props) {
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

Clouds.propTypes = {
  cloudCont: PropTypes.number
}