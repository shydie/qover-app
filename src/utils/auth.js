import axios from 'axios'
import { API_HOST, API_KEY, API_VERSION } from '../constants/api'

export const setDefaultConfig = () => {
  const token = localStorage.getItem('token')
  setAuthHeader(token)
  axios.defaults.baseURL = API_HOST
  axios.defaults.params  = {'apikey': API_KEY}
}

export const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers.common['Qover-Api-Version'] = API_VERSION
    axios.defaults.headers.common['Authorization']     = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common['Qover-Api-Version']
    delete axios.defaults.headers.common['Authorization']
  }
}