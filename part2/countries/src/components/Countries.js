import React from 'react'
import Country from './Country'
import CountryProfile from './CountryProfile'

const Countries = ({countries, find}) => {
  const countriesFiltered = countries.filter(country => country.name.toUpperCase().includes(find.toUpperCase()))

  if (countriesFiltered.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countriesFiltered.length === 1) {
    return (
      <CountryProfile country={countriesFiltered[0]}/>
    )
  } else if (countriesFiltered.length <= 10) {
    return (
      <ul>
      {countriesFiltered.map(country =>
        <Country key={country.name} country={country}/>
      )}
      </ul>
    )
  }
}

export default Countries