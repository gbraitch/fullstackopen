import React, { useState, useEffect } from 'react'
import './index.css'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personsService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} error={false}/>
      <Notification message={errorMessage} error={true}/>
      <Filter filter={filter} setFilter={setFilter}/>
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} setMessage={setMessage} setErrorMessage={setErrorMessage}/>
      <h3>Numbers</h3>
      <Persons persons={persons} setPersons={setPersons} filter={filter} setMessage={setMessage}/>
    </div>
  )
}

export default App