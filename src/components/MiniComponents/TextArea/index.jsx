import React from 'react'
import './index.scss'

function TextArea({ name, onChange, placeholder, value, maxLength }) {
  return (
    <textarea name={name} cols='50' rows='10' onChange={onChange} placeholder={placeholder} className='textAreaForm' value={value} maxLength={maxLength}></textarea>
  )
}

export default TextArea
