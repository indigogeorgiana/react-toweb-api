import React from 'react'

const Button = (props) => {
  function logIt () {
    console.log('hi')
  }
  return (
    <button type='button' onClick={logIt}>Log Me</button>
  )
}

export default Button
