import React from 'react'

const Notification = ({ message, error }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={error ? 'error' : 'message'}>
      {message}
    </div>
  )
}

export default Notification