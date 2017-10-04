/**
 * Created by askorodumov on 29.09.17.
 */
import * as types from '../constants/actionTypes'

const initialState = {
  isLoading: false,
  error: false,
  message: '',
}

const prices = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_LEADS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case types.FETCH_LEADS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: true,
        message: action.message
      }
    case types.FETCH_LEADS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        message: action.message
      }
    default:
      return state
  }
}

export default prices