/**
 * Created by askorodumov on 03.10.17.
 */
import * as types from '../constants/actionTypes'

export const fetchLeads = (draftId, userEmail) => ({
  type: types.FETCH_LEADS_REQUEST,
  draftId,
  userEmail
})