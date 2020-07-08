import React from 'react'
import Person from './Person'
import personsService from '../services/persons'

const Persons = ({persons, setPersons, filter}) => {
  const personsFiltered = persons.filter(person => person.name.toUpperCase().startsWith(filter.toUpperCase()))

  const deletePerson = (name,id) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personsService
        .del(id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  return (
    <ul>
    {personsFiltered.map(person =>
      <Person key={person.name} person={person} deletePerson={() => deletePerson(person.name, person.id)}/>
    )}
    </ul>
  )
}

export default Persons