let id = 1

export const addChore = (chore) => {
  return {
    type:'ADD_CHORE',
    chore,
    id: id++
  }
}

export const completeChore = (id) => {
  return {
    type:'COMPLETE_CHORE',
    id
  }
}