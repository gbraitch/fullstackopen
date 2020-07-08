import React, { useState } from 'react'
import CountryProfile from './CountryProfile'

const Country = ({country}) => {
  const [show, setShow] = useState(false)

  const showCountry = () => {
    if (show) {
      return (
        <CountryProfile country={country}/>
      )
    }
    else {
      return (
        <></>
      )
    }
  }

  return (
    <li>
      {country.name}
      <button onClick={() => setShow(!show)}>
        {show ? 'hide' : 'show'}
      </button>
      {showCountry()}
    </li>
  )
}

export default Country