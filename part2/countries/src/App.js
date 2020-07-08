import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Find from './components/Find'
import Countries from './components/Countries'

const App = () => {
  const [ countries, setCountries] = useState([])
  const [ find, setFind] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  return (
    <div>
      <Find find={find} setFind={setFind}/>
      <Countries countries={countries} find={find}/>
    </div>
  )
}

export default App