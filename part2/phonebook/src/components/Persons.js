import React from 'react'
import Person from './Person'

const Persons = ({persons, filter}) => {
  const personsFiltered = persons.filter(person => person.name.toUpperCase().startsWith(filter.toUpperCase()))

  return (
    <ul>
    {personsFiltered.map(person =>
      <Person key={person.name} person={person}/>
    )}
    </ul>
  )
}

export default Persons