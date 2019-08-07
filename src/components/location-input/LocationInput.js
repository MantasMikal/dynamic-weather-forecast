import React from 'react'
import PropTypes from 'prop-types'
import styles from './LocationInput.module.scss'

export default function LocationInput(props) {
  return (
    <form className={styles.form} onSubmit={props.handleLocationChange}>
      <label>
        Location:
        <input
          className={styles.input}
          type="text"
          name="location"
          defaultValue="Kings Langley, UK"
        />
      </label>
      <input className={styles.submit} type="submit" value="GO" />
    </form>
  )
}

LocationInput.propTypes = {
  handleLocationChange: PropTypes.func.isRequired
}
