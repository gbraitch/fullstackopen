import React, { useState } from 'react'
import personsService from '../services/persons'

const PersonForm = ({persons, setPersons}) => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === newName)) {
      const res = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)

      if (res) {
        const id = persons.find(person => person.name === newName).id
        personsService
          .update(id,person)
          .then(response  => {
            setPersons(persons.map(person => person.id !== id ? person : response.data ))
          })
      }

      return
    }

    personsService
      .create(person)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleNameChange = (event => setNewName(event.target.value))

  const handleNumberChange = (event => setNewNumber(event.target.value))

  return (
    <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm