import React, { useState } from 'react'
import './index.scss'
import TodoList from './TodoList'
import EditPage from '../EditPage'
import Button from '../MiniComponents/Button'
import Input from '../MiniComponents/Input'
import TextArea from '../MiniComponents/TextArea'

function TodoForm() {

const [todos, setTodos] = useState([])
const [tarefa, setTarefa] = useState('')
const [desc, setDesc] = useState('')
const [idNumbers, setIdNumbers] = useState(1)
const [showEditPage, setShowEditPage] = useState(false)
const [editIdItem, setEditIdItem] = useState(null)

function handleChange(e) {

if(e.target.name === 'todo') {

setTarefa(e.target.value)

} else if(e.target.name === 'desc') {

setDesc(e.target.value)

}

}

function handleSubmit(e) {

e.preventDefault()
if(tarefa === '' || desc === '') {

alert('You need set a value in a questions!')

} else {

setIdNumbers(idNumbers + 1)

const newTodo = {
  
id: idNumbers,
tarefa: tarefa,
desc: desc

}

setTodos([...todos, newTodo])
setTarefa('');
setDesc('');

}

}

function handleEdit(id) {

setShowEditPage(true)
setEditIdItem(id)

}

function handleDelete(id){
  
todos.map((res) => {
if(res.id == id) {

  if(confirm('Voce realmente quer apagar ' + res.tarefa)) {

    const todoUpdate = todos.filter(value => value.id !== id)
    setTodos(todoUpdate)
    
  } else {

  alert('Cancelado')

  }
  
}
})

}

  return (
    <div>
      {showEditPage ? <EditPage todos={todos} setTodos={setTodos} editIdItem={editIdItem} setShowEditPage={setShowEditPage}/> : null}
    <div>
        <form onSubmit={handleSubmit}>
            <div className='box-form'>
              <Input type='text' placeholder='What todo create?' name='todo' onChange={handleChange} value={tarefa} maxLength='50'/>
              <TextArea name='desc' onChange={handleChange} placeholder='What description for todo?' value={desc} maxLength='350'/>
              <Button text='Save' type='submit'/>
            </div>
        </form>
    </div>
    <div>
        <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit}/>
    </div>
    </div>
  )
}

export default TodoForm
