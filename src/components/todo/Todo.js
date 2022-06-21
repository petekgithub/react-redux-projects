import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'


const Todo = () => {
  return (
    <div className='app'>
    <h2>TODO with redux</h2>
    <TodoInput />
    <TodoList />
    </div>
  )
}

export default Todo