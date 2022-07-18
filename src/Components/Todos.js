import React from 'react'
import { connect } from 'react-redux'
import List from './List.js'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo
} from '../actions/todos.js'


class Todos extends React.Component {
  addItem = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddTodo(this.input.value,
      () => this.input.value = ''
    ))
  }
  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo))
  }
  toggleItem = (todo) =>{
    this.props.dispatch(handleToggleTodo(todo))
  }
  render(){
    return(
      <div>
        <h1>Todos List</h1>
        <input type='text' placeholder="Add Todo" ref={(input) => this.input = input}/>
        <button type="button" name="button" onClick={(e) => this.addItem(e)}>Add</button>
        <List
          items={this.props.todos}
          remove={this.removeItem}
          toggle={this.toggleItem}
        />
      </div>
    )
  }
}

export default connect(state => ({
        todos: state.todos
      }))(Todos);
