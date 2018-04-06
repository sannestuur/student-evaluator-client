import * as request from 'superagent'
import {baseUrl} from '../constants'

export const ADD_STUDENT = 'ADD_STUDENT'
export const GET_STUDENT = 'GET_STUDENT'
export const GET_STUDENTS = 'GET_STUDENTS'
export const UPDATE_STUDENT = 'UPDATE_STUDENT'
export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS'
export const DELETE_STUDENT = 'DELETE_STUDENT'


export const getStudent = (studentId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/students/${studentId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: GET_STUDENT,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const getStudents = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/students`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: GET_STUDENTS,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const createStudent = (newStudent) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/students`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(newStudent)
    .then(result => {
      dispatch({
        type: ADD_STUDENT,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const updateStudent = (studentId, update) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/students/${studentId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({update})
    .then(result => {
      dispatch({
        type: UPDATE_STUDENT_SUCCESS
      })
    })
    .catch(err => console.error(err))
}

export const deleteStudent = (studentId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .delete(`${baseUrl}/students/${studentId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: DELETE_STUDENT
      })
    })
    .catch(err => console.error(err))
}
