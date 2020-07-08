import React, {useState, useEffect} from 'react'
import axios from 'axios'

const CountryProfile =({country}) => {
  const [weather, setWeather] = useState('')

  const hook = () => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`)
      .then(response => {
        setWeather(response.data.current)
      })
  }

  useEffect(hook, [])

  return (
    <div>
      <h1>{country.name}</h1>
      <p>
        capital {country.capital}
        <br/> population {country.population}
      </p>
      <h2>Spoken Languages</h2>
      <ul>
        {country.languages.map(language =>
          <li key={language.name}>{language.name}</li>
        )}
      </ul>
      <img src={country.flag} alt="Flag" width="150" height="100"></img>
      <h2>Weather in {country.capital}</h2>
      <p>
        <b>temperature:</b> {weather.temperature}
        <br/> <img src={weather.weather_icons} alt="weather"></img>
        <br/> <b>wind:</b> {weather.wind_speed} mph direction {weather.wind_dir}
      </p>
    </div>
  )
}

export default CountryProfile