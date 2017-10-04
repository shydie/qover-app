/**
 * Created by askorodumov on 24.09.17.
 */
import * as types from '../constants/actionTypes'

export const fetchLogin = (email, password) => ({
  type: types.FETCH_LOGIN_REQUEST,
  email,
  password
})

export const fetchLogout = () => ({
  type: types.FETCH_LOGOUT_REQUEST
})