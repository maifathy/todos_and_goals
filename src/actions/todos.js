import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

export function removeTodo (id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

export function toggleTodo (id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

export function handleDeleteTodo(todo){
  return (dispatch) => {
    dispatch(removeTodo(todo.id))
    API.deleteTodo(todo.id)
    .catch(() => {
      dispatch(addTodo(todo))
      alert('An error occurred. Try again.')
    })
  }
}

export function handleAddTodo(name, callback){
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo))
        callback()
      })
      .catch(() => alert('An error occurred while adding, try again'))
  }
}

export function handleToggleTodo(todo){
  return (dispatch) => {
    dispatch(toggleTodo(todo.id))
    API.saveTodoToggle(todo.id)
    .catch(() => {
      dispatch(toggleTodo(todo.id))
      alert('An error occurred. Try again.')
    })
  }
}
