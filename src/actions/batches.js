import * as request from 'superagent'
import {baseUrl} from '../constants'

export const ADD_BATCH = 'ADD_BATCH'
export const UPDATE_BATCH = 'UPDATE_BATCH'
export const UPDATE_BATCHES = 'UPDATE_BATCHES'
// export const JOIN_BATCH_SUCCESS = 'JOIN_BATCH_SUCCESS'
export const UPDATE_BATCH_SUCCESS = 'UPDATE_BATCH_SUCCESS'

export const getBatches = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/batches`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: UPDATE_BATCHES,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

// export const joinGame = (batchId) => (dispatch, getState) => {
//   const state = getState()
//   const jwt = state.currentUser.jwt
//
//   request
//     .post(`${baseUrl}/batches/${batchId}/players`)
//     .set('Authorization', `Bearer ${jwt}`)
//     .then(result => {
//       dispatch({
//         type: JOIN_BATCH_SUCCESS
//       })
//     })
//     .catch(err => console.error(err))
// }

export const createBatch = (id, startDate, endDate) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/batches`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ id, startDate, endDate })
    .then(result => {
      dispatch({
        type: ADD_BATCH,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

//change board here:
export const updateBatch = (batchId, board) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/batches/${batchId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({board})
    .then(result => {
      dispatch({
        type: UPDATE_BATCH_SUCCESS
      })
    })
    .catch(err => console.error(err))
}
