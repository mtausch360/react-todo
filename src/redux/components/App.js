import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'
const App = () => (
  <div>
    <header>
      <h1>Todos Redux</h1>
      <AddTodo />
    </header>
    <TodoList />
    <Footer />
  </div>
)
export default App
