import React, { useEffect, useState } from 'react'
import './index.scss'
import Button from '../MiniComponents/Button'
import Input from '../MiniComponents/Input'
import TextArea from '../MiniComponents/TextArea'

function EditPage({ todos, setTodos, editIdItem, setShowEditPage }) {
const [newTodo, setNewTodo] = useState('')
const [newDesc, setNewDesc] = useState('')
const itemToUpdate = todos.find(todo => todo.id === editIdItem)
console.log(itemToUpdate)
useEffect(() => {

if(itemToUpdate) {

setNewTodo(itemToUpdate.tarefa)
setNewDesc(itemToUpdate.desc)

}
}, [itemToUpdate]) //So atualiza quando itemToUpdate for alterado
    
function handleChange(e) {

if(e.target.name === 'editTarefa') {

setNewTodo(e.target.value)

} else if(e.target.name === 'editDesc') {

setNewDesc(e.target.value)

}
}

function handleSubmit(event) {

event.preventDefault()

if(newTodo.length > 0 || newDesc > 0) {

setTodos(todos.map(todo => todo.id === editIdItem ? {...todo, tarefa: newTodo, desc: newDesc}: todo))
setShowEditPage(false)

} else {

alert('You need set a value in a questions!')

}

}

  return (
    <>
    <div className='editPageBG' onClick={() => {setShowEditPage(false)}}></div>
        <div className='editPage'>
            <h1>Edit: {todos.map(todo => todo.id === editIdItem ? todo.tarefa : null)}</h1>
            <form onSubmit={handleSubmit} className='form-editPage'>
                <Input placeholder='New title is...' onChange={handleChange} name='editTarefa' maxLength='50' value={newTodo}/>
                <TextArea name='editDesc' onChange={handleChange} placeholder='New description is...'maxLength='350' value={newDesc}/>
                <Button text='Confirm' type='submit'/>
            </form>
        </div>
    </>
  )
}

export default EditPage
