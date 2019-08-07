import React from 'react'
import styles from './Clouds.module.scss'
import cloud1 from '../../assets/cloud1.svg'
import cloud2 from '../../assets/cloud2.svg'
import cloud3 from '../../assets/cloud3.svg'

export function Cloud1() {
    return (
        <img src={cloud1} alt="Cloud" />            
    )
}

export function Cloud2() {
    return (
        <div className={styles.cloud2}>
            <img src={cloud2} alt="Cloud" />
        </div>
    )
}

export function Cloud3() {
    return (
        <div className={styles.cloud3}>
            <img src={cloud3} alt="Cloud" />
        </div>
    )
}
