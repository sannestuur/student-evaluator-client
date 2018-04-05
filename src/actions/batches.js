import * as request from 'superagent'
import {baseUrl} from '../constants'

export const ADD_BATCH = 'ADD_BATCH'
export const GET_BATCH = 'GET_BATCH'
export const GET_BATCHES = 'GET_BATCHES'
export const UPDATE_BATCH = 'UPDATE_BATCH'
export const UPDATE_BATCH_SUCCESS = 'UPDATE_BATCH_SUCCESS'

export const getBatch = (batchId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/batches/${batchId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: GET_BATCH,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const getBatches = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/batches`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: GET_BATCHES,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const createBatch = (newBatch) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/batches`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({newBatch})
    .then(result => {
      dispatch({
        type: ADD_BATCH,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const updateBatch = (batchId, update) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/batches/${batchId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({update})
    .then(result => {
      dispatch({
        type: UPDATE_BATCH_SUCCESS
      })
    })
    .catch(err => console.error(err))
}
