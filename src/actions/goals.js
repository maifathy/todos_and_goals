import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

export function addGoal (goal) {
  return {
    type: ADD_GOAL,
    goal,
  }
}

export function removeGoal (id) {
  return {
    type: REMOVE_GOAL,
    id,
  }
}

export function handleDeleteGoal(goal){
  return (dispatch) => {
    dispatch(removeGoal(goal.id))
    API.deleteGoal(goal.id)
    .catch(() => {
      dispatch(addGoal(goal))
      alert('An error occurred. Try again.')
    })
  }
}

export function handleAddGoal(name, callback){
  return (dispatch) => {
    return API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoal(goal))
        callback()
      })
      .catch(() => alert('An error occurred while adding, try again'))
  }
}
