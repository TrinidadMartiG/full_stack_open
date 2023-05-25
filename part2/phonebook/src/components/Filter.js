import React from 'react'

const FilterName = ({handleChangeFilter}) => {
  return (
    <>
      <p>
        filter shown with <input onChange={handleChangeFilter} />{' '}
      </p>
    </>
  )
}

export default FilterName
