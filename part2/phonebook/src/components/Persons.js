import React from 'react'
import Person from './Person'
import personsService from '../services/persons'

const Persons = ({persons, setPersons, filter, setMessage}) => {
  const personsFiltered = persons.filter(person => person.name.toUpperCase().startsWith(filter.toUpperCase()))

  const deletePerson = (name,id) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personsService
        .del(id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== id))
          setMessage(`Deleted ${name}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
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