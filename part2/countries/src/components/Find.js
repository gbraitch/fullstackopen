import React from 'react'

const Find = ({find, setFind}) => {
  const handleFind = (event => setFind(event.target.value))

  return (
    <>
      find countries<input value={find} onChange={handleFind}/>
    </>
  )
}

export default Find