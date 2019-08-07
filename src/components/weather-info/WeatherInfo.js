import React from 'react'
import styles from './WeatherInfo.module.scss'

// Gets name of the day based on date
function getDayName(dateStr, locale = 'gb-GB')
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

export default function WeatherInfo(props) {
    const { forecast, time } = props
    const current = props.forecast[0] // Current day
    let weekForecast = [] // Store other week days forecast
    const howManyDays = 2  // How many days of it

    for(let i = 1; i <= howManyDays; i++){
        weekForecast.push(
            <span key={`weekDayForecast-${i}`}>{getDayName(forecast[i].datetime)}: {forecast[i].max_temp}° / {forecast[0].min_temp}° </span>
        )
    }
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.temperature}>{current.temp}°</div>
            <div className={styles.day}>{time}, {getDayName(current.datetime)}</div>
            <div className={styles.location}>{props.location}</div>
            <div className={styles.weatherDetailsWrapper}>
                <div className={styles.weatherDetails}>
                    <span>Wind: {current.wind_cdir} {Math.round(current.wind_spd)}km/h <span role="img" aria-label="Wind">💨</span></span>
                    <span>Humidity: {current.rh}% <span role="img" aria-label="Humidity">💧</span></span>
                </div>
                <div className={styles.weatherDays}>
                    {weekForecast}
                </div>
            </div>
        </div>
    )
}
