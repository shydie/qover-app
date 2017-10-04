/**
 * Created by askorodumov on 28.09.17.
 */
import * as types from '../constants/actionTypes'

const initialState = {
  draftId: null
}

const draft = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_DRAFT_SUCCESS:
      return {
        ...state,
        draftId: action.draftId
      }
    default:
      return state
  }
}

export default draft