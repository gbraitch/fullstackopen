import React, { useState } from 'react'

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
      alert(`${newName} is already added to phonebook.`)
      return
    }

    setPersons(persons.concat(person))
    setNewName('')
    setNewNumber('')
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