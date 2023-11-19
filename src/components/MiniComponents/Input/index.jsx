import React from 'react'
import './index.scss'

function Input({type, placeholder, onChange, name, value, maxLength}) {
  return (
    <input type={type || 'text'} placeholder={placeholder} onChange={onChange} name={name} className='input' value={value} maxLength={maxLength}/>
  )
}

export default Input
