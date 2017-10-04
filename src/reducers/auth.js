/**
 * Created by askorodumov on 24.09.17.
 */
import * as types from '../constants/actionTypes'

const initialState = {
  isLoggedIn: !!localStorage.getItem('token')
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      }
    case types.FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      }
    case types.FETCH_LOGIN_FAIL:
      return state
    default:
      return state
  }
}

export default auth