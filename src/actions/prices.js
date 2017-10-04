/**
 * Created by askorodumov on 29.09.17.
 */
import * as types from '../constants/actionTypes'

export const fetchPrices = (data) => ({
  type: types.FETCH_DRAFT_REQUEST,
  data
})