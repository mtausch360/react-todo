import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { VisibilityFilters } from '../actions'
import Todo from '../components/Todo';

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


class TodoList extends Component {
  render () {
    const { todos, toggleTodo } = this.props
    return (
      <ul>
        {
          todos.map(todo => 
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
          )
        }
      </ul>
    );
  }
};

const mapStateToProps = state => {
  console.log('state', state)
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
