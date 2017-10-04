import * as types from '../constants/actionTypes'

const initialState = {}

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        name: action.name,
        age: action.age,
        car: action.car,
        email: action.email
      }
    default:
      return state
  }
}

export default user