import React from 'react'
import { connect } from 'react-redux'
import List from './List.js'
import {
  handleAddGoal,
  handleDeleteGoal
} from '../actions/goals.js'

class Goals extends React.Component {
  addItem = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddGoal(this.input.value,
      () => this.input.value = ''
    ))
  }
  removeItem = (todo) => {
    this.props.dispatch(handleDeleteGoal(todo))
  }
  render(){
    return(
    <div>
      <h1>Goals List</h1>
      <input type='text' placeholder="Add Goal" ref={(input) => this.input = input}/>
      <button type="button" name="button" onClick={(e) => this.addItem(e)}>Add</button>
      <List
        items={this.props.goals}
        remove={this.removeItem}
      />
    </div>
    )
  }
}

export default connect(state => ({
  goals: state.goals
}))(Goals);
