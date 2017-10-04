/**
 * Created by askorodumov on 25.09.17.
 */
import axios from 'axios'
import * as api from '../constants/api'

export const requestLogin = (email, password) => {
  return axios({
    method: 'post',
    url: api.AUTH_LOG_IN,
    data: {
      email: email,
      password: password
    }
  })
}

export function requestLogout () {
  return axios({
    method: 'post',
    url: api.AUTH_LOG_OUT
  })
}

export const requestDraft = (data) => {
  return axios({
    method: 'post',
    url: api.USER_DRAFT,
    data: data
  })
}

export const requestPrice = (draftID) => {
  return axios({
    method: 'post',
    url: `${api.USER_DRAFT}/${draftID}/price-requests`,
    data: {
      'partnerReference': [{
        'key': 'salexId',
        'value': '12345678'
      }]
    }
  })
}
export const requestLeads = (draftID) => {
  return axios({
    method: 'post',
    url: `${api.USER_DRAFT}/${draftID}/leads`,
    data: {
      'partnerReference': {
        'reference': 'yourreference'
      },
      'transport': 'EMAIL'
    }
  })
}
