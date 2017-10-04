/**
 * Created by askorodumov on 26.09.17.
 */
import * as types from '../constants/actionTypes'

export const fetchDraft = (data) => ({
  type: types.FETCH_DRAFT_REQUEST,
  data
})