import React, { useState } from 'react';
import Button from '../../MiniComponents/Button';
import './index.scss'

function TodoList({ todos, onDelete, onEdit }) {

  function handleDelete(id){

  onDelete(id)

  }

  function handleEdit(id) {

  onEdit(id)

  }

  return (
    <div className='content-todo'>
      <ul className='list-todo'>
        {todos.map((res) => (
          <li key={res.id} className='item-todo'>
            <h2>{res.tarefa}</h2>
            <p className='desc-todo'>{res.desc}</p>
            <div className='container-buttons'>
              <Button text='Edit' onClick={() => handleEdit(res.id)}></Button>
              <Button text='Delete' onClick={() => handleDelete(res.id)}></Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default TodoList;
