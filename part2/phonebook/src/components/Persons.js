import React from 'react'

const Persons = ({personsToShow, deleteNumber}) => {
  return (
    <>
      <div>
        {personsToShow.map((person) => (
          <div key={person.name}>
            {person.name} {person.number} 
            <button onClick={()=> deleteNumber(person.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Persons
