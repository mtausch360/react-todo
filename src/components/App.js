import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'
const App = () => (
  <div className="todoapp">
    <header className="header">
      <h1>Todos</h1>
      <AddTodo />
    </header>
    <TodoList />
    <Footer />
  </div>
)
export default App
