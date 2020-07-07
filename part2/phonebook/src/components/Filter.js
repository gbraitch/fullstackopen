import React from 'react'

const Filter = ({filter, setFilter}) => {
  const handleFilter = (event => setFilter(event.target.value))

  return (
    <>
      filter shown with <input value={filter} onChange={handleFilter}/>
    </>
  )
}

export default Filter