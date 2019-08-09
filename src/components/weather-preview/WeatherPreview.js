import React from 'react'
import Sun from './Sun'
import Hills from './Hills'
import Fall from './Fall'
import Moon from './Moon'
import Clouds from './Clouds'
import PropTypes from 'prop-types'
import styles from './WeatherPreview.module.scss'

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