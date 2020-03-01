import React, { useReducer } from 'react';

import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

import todosReducer from '../redux/reducers/todos'
import visibilityFilterReducer from '../redux/reducers/visibilityFilter'

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from '../redux/actions'

let id = 0;

const App = () => {
  const [todos, dispatchTodo] = useReducer(todosReducer, [])
  const [visibility, dispatchVisibility] = useReducer(visibilityFilterReducer, VisibilityFilters.SHOW_ALL)
  return (
    <div>
      <AddTodo
        addTodo={(text) => dispatchTodo(addTodo(text))}
      />
      <TodoList
        todos={todos}
        toggleTodo={(todo) => dispatchTodo(toggleTodo(todo))}
        filter ={visibility}
      />
      <Footer
        toggleFilter={(filter) => dispatchVisibility(setVisibilityFilter(filter))}
        activeFilter={visibility}
      />
    </div>
  )
};

export default App;
