/**
 * Created by askorodumov on 29.09.17.
 */
import * as types from '../constants/actionTypes'

const initialState = []

const prices = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRICE_SUCCESS:
      return action.prices
    default:
      return state
  }
}

export default prices