import * as request from 'superagent'
import {baseUrl} from '../constants'

export const ADD_EVALUATION = 'ADD_EVALUATION'
export const UPDATE_EVALUATION = 'UPDATE_EVALUATION'
export const UPDATE_EVALUATIONS = 'UPDATE_EVALUATIONS'
export const UPDATE_EVALUATION_SUCCESS = 'UPDATE_EVALUATION_SUCCESS'

export const getEvaluations = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/evaluations`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: UPDATE_EVALUATIONS,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const createEvaluation = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/evaluations`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: ADD_EVALUATION,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const updateEvaluation = (evaluationId, update) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/evaluations/${evaluationId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({update})
    .then(result => {
      dispatch({
        type: UPDATE_EVALUATION_SUCCESS
      })
    })
    .catch(err => console.error(err))
}
