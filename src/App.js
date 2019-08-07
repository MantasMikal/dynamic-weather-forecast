import React from 'react'
import WeatherPreview from './components/weather-preview/WeatherPreview'
import WeatherInfo from './components/weather-info/WeatherInfo'
import LocationInput from './components/location-input/LocationInput'
import styles from './App.module.scss'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      location: 'Kings Langley',
      forecast: null,
      isRaining: false,
      isDay: true,
      isSnowing: false,
      cloudCount: 0,
      time: undefined
    }
  }

  handleLocationChange = async e => {
    e.preventDefault()
    const location = e.target[0].value
    this.getCurrentWeather(location)
  }

  getCurrentWeather = async location => {
    const KEY = '8c295ee8b00a45289d29e5130748efe5'
    const API = `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=${KEY}`
    const res = await fetch(API)
    const data = await res.json()
    const isRaining = data.data[0].pop > 60 ? true : false
    const isDay = this.isDay(data.timezone)
    const cloudCount = data.data[0].clouds / 10
    const isSnowing = data.data[0].snow > 100 && isRaining // Check if there is snow and it is raining
    const time = this.getCurrentTime(data.timezone)
    this.setState({
      location: location,
      forecast: data.data,
      isRaining: isRaining,
      isDay: isDay,
      cloudCount: cloudCount,
      isSnowing: isSnowing,
      time: time
    })

    return data // TODO Delete if not going to be use
  }

  async componentDidMount() {
    this.getCurrentWeather(this.state.location)

    // TODO
    // Is cloudy?
  }

  // Find out if it is day or night based on timezone
  isDay = timeZone => {
    let options = {
        timeZone: timeZone,
        hour: 'numeric'
      },
      formatter = new Intl.DateTimeFormat([], options)

    const hours = formatter.format(new Date())
    return hours > 6 && hours < 18 ? true : false
  }

  //Gets current time based on timezone
  getCurrentTime = timezone => {
    let options = {
        timeZone: timezone,
        hour: 'numeric',
        minute: 'numeric'
      },
      formatter = new Intl.DateTimeFormat([], options)

    const time = formatter.format(new Date())
    return time
  }

  render() {
    const {
      forecast,
      isRaining,
      isDay,
      cloudCount,
      location,
      isSnowing,
      time
    } = this.state

    return (
      forecast && (
        <div className={styles.root}>
          <LocationInput handleLocationChange={this.handleLocationChange} />
          <WeatherPreview
            isRaining={isRaining}
            isDay={isDay}
            cloudCount={cloudCount}
            isSnowing={isSnowing}
          />
          {forecast && (
            <WeatherInfo forecast={forecast} location={location} time={time} />
          )}
        </div>
      )
    )
  }
}

export default App
