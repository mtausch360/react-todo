import React from 'react'
import Todo from './Todo'

import { VisibilityFilters } from '../redux/actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const TodoList = ({ todos, toggleTodo, filter }) => {
  return (
    <ul>
      {
        getVisibleTodos(todos, filter).map(todo => 
          <Todo
            key={todo.id}
            todo={todo}
            onClick={() => toggleTodo(todo.id)}
           />
        )
      }
    </ul>
  )
}

export default TodoList
