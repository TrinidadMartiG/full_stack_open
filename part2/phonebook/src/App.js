import { useEffect, useState } from 'react'
import FilterName from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'
import phoneService from './services/phones'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([{}])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [message, setMessage] = useState(null)

useEffect(()=>{
  phoneService
  .getAll()
  .then(savedPersons => {
    setPersons(savedPersons)
  })
},[])

  const handleChangeName = (e) => {
    setNewName(e.target.value)
  }
  const handleChangePhone = (e) => {
    setNewNumber(e.target.value)
  }
  const handleChangeFilter = (e) => {
    setFilterName(e.target.value)
    console.log(e.target.value)
  }

  const personsToShow = persons.filter(
    (person) =>
      person.name &&
      person.name.toLowerCase().includes(filterName.toLowerCase())
  )

  const addName = (e) => {
    e.preventDefault()
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const nameObject = {
      name: newName,
      number: newNumber,
    }

    phoneService
    .create(nameObject)
    .then(returnedObj => {
      setPersons(persons.concat(returnedObj))
      setNewName('')
      setNewNumber('')
      setMessage(`Added ${returnedObj.name}`)
      setTimeout(() => {
        setMessage(null)
      }, 5000) // Set the timer to clear the message after 5 seconds
      console.log('added', returnedObj)
    })
  }

  const deleteNumber =(id) => {
    phoneService
    .erase(id)
    .then(response=> {
      setPersons(persons.filter(person=>person.id !== id))
      setMessage(`Deleted person with id: ${id}`)
      setTimeout(() => {
        setMessage(null)
      }, 5000) // Set the timer to clear the message after 5 seconds
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterName handleChangeFilter={handleChangeFilter} />
      <Notification message={message}/>
      <h3>Add a new</h3>
      <PersonsForm
        addName={addName}
        handleChangeName={handleChangeName}
        handleChangePhone={handleChangePhone}
        newName={newName}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} deleteNumber={deleteNumber} />
    </div>
  )
}

export default App
