import React from 'react'

const PersonsForm = ({addName, handleChangeName, handleChangePhone, newName, newNumber}) => {
  return (
    <>
      <form onSubmit={addName}>
        <div>
          name: <input onChange={handleChangeName} value={newName}/>
        </div>
        <div>
          number: <input onChange={handleChangePhone} value={newNumber} />
        </div>

        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </>
  )
}

export default PersonsForm
