import React, {useState, useEffect} from 'react'
import WeatherPreview from './components/weather-preview/WeatherPreview'
import WeatherInfo from './components/weather-info/WeatherInfo'
import LocationInput from './components/location-input/LocationInput'
import { getIsDay, getCurrentTime } from './lib/helpers'
import styles from './App.module.scss'


function App () {
  const [location, setLocation] = useState('Kings Langley')
  const [forecast, setForecast] = useState(null)
  const [time, setTime] = useState('')
  const [weatherDetails, setWeatherDetails] = useState(
    {
      isRaining: false,
      isDay: true,
      isSnowing: false,
      cloudCount: 0,
    }
  )

  useEffect(() => {
    getCurrentWeather(location)
  }, [location])

  function handleLocationChange(e) {
    e.preventDefault()
    const location = e.target[0].value
    getCurrentWeather(location)
  }

  async function getCurrentWeather (location) {
    const KEY = '8c295ee8b00a45289d29e5130748efe5'
    const API = `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=${KEY}`
    const res = await fetch(API)
    const data = await res.json()
    const isRaining = data.data[0].pop > 60 ? true : false
    const cloudCount = data.data[0].clouds / 10
    const isSnowing = data.data[0].snow > 100 && isRaining // Check if there is snow and it is raining
    const time = getCurrentTime(data.timezone)
    const isDay = getIsDay(data.timezone)
    
    setLocation(location)
    setForecast(data.data)
    setTime(time)
    setWeatherDetails({
      isRaining,
      isDay,
      cloudCount,
      isSnowing
    })
  }

  return (
    forecast && (
      <div className={styles.root}>
        <LocationInput handleLocationChange={handleLocationChange} />
        <WeatherPreview weatherDetails={weatherDetails}/>
        {forecast && (
          <WeatherInfo forecast={forecast} location={location} time={time} />
        )}
      </div>
    )
  )
}

export default App
