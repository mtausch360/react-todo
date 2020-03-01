import React from 'react';

const AddTodo = ({addTodo}) => {
  let input
  return (
    <header>
      <h1>Todos Hooks</h1>
      <form
        onSubmit={ e => {
          e.preventDefault()
          if(!input.value.trim()) {
            return
          }
          addTodo(input.value)
          input.value = ''
        }}
      >
        <input ref = { node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </header>
  )
}

export default AddTodo
