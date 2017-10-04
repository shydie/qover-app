/**
 * Created by askorodumov on 29.09.17.
 */
import * as types from '../constants/actionTypes'

export const setCurrentUser = (name, age, car, email) => ({
  type: types.SET_CURRENT_USER,
  name,
  age,
  car,
  email
})