import { call, put, takeLatest } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import * as api from '../api/'
import { setAuthHeader } from '../utils/auth.js'
import store, { history } from '../store'
import { persistStore } from 'redux-persist'

function* fetchLogin (action) {
  try {
    const response = yield call(api.requestLogin, action.email, action.password)
    const token    = response.data.data.token
    yield put({type: types.FETCH_LOGIN_SUCCESS})
    if (token) {
      yield call(setAuthHeader, token)
      localStorage.setItem('token', token)
      yield call(history.push, '/form')
    }
  } catch (e) {
    yield put({type: types.FETCH_LOGIN_FAIL, message: e.message})
  }
}

function* fetchLogout () {
  try {
    yield call(api.requestLogout)
    yield put({type: types.FETCH_LOGOUT_SUCCESS})
    yield call(setAuthHeader, null)
    persistStore(store, localStorage.removeItem('token')).purge()
    yield call(history.push, '/')
  } catch (e) {
    yield put({type: types.FETCH_LOGOUT_FAIL, message: e.message})
  }
}

function* fetchDraft (action) {
  try {
    const res       = yield call(api.requestDraft, action.data)
    const {draftId} = res.data
    yield put({type: types.FETCH_DRAFT_SUCCESS, draftId: draftId})
  } catch (e) {
    yield put({type: types.FETCH_DRAFT_FAIL, message: e.message})
  }
}

function* fetchPrice (action) {
  try {
    const res      = yield call(api.requestPrice, action.draftId)
    const {prices} = res.data
    yield put({type: types.FETCH_PRICE_SUCCESS, prices: prices})
    yield call(history.push, '/prices')
  } catch (e) {
    yield put({type: types.FETCH_PRICE_FAIL, message: e.message})
  }
}

function* fetchLeads (action) {
  try {
    const res = yield call(api.requestLeads, action.draftId)
    console.log(res)
    const successMessage = `Email has been sent to the ${action.userEmail}`
    yield put({type: types.FETCH_LEADS_SUCCESS, message: successMessage})
  } catch (e) {
    yield put({type: types.FETCH_LEADS_FAIL, message: e.message})
  }
}

function* rootSaga () {
  yield takeLatest(types.FETCH_LOGIN_REQUEST, fetchLogin)
  yield takeLatest(types.FETCH_LOGOUT_REQUEST, fetchLogout)
  yield takeLatest(types.FETCH_DRAFT_REQUEST, fetchDraft)
  yield takeLatest(types.FETCH_DRAFT_SUCCESS, fetchPrice)
  yield takeLatest(types.FETCH_LEADS_REQUEST, fetchLeads)
}

export default rootSaga