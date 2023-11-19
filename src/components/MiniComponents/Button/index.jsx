import React from 'react'
import './index.scss'

function Button({text, type, onClick}) {
  return (
    <button className='btn' type={type || 'button'} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button
