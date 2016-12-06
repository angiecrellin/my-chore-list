const chore = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CHORE':
      return {
        id: action.id,
        text: action.chore,
      }
    default:
      return state
  }
}


const chores = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHORE':
      return [
        ...state,
        chore(undefined, action)
      ]
    case 'COMPLETE_CHORE':
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ]
    default:
      return state
  }
}

export default chores