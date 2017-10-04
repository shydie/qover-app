/**
 * Created by askorodumov on 25.09.17.
 */
import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export function validateLogin (data) {
  let errors = {}
  if (!Validator.isEmail(data.email)) {
    errors.email = 'This field should be email address'
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required'
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

export function validateForm (data) {
  let errors = {}

  if (Validator.isEmpty(data.name)) {
    errors.name = 'This field is required'
  }

  if (!Validator.isInt(data.age)) {
    errors.age = 'This field can only contain numeric values'
  }

  if (data.age < 16 || data.age > 100) {
    errors.age = 'Sorry, but your age is out of range'
  }

  if (Validator.isEmpty(data.age)) {
    errors.age = 'This field is required'
  }

  if (Validator.isEmpty(data.car)) {
    errors.car = 'This field is required'
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'This field should be email address'
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}