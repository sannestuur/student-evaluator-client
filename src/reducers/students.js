import {GET_STUDENT, ADD_STUDENT, UPDATE_STUDENT, GET_STUDENTS} from '../actions/students'

export default (state = null, {type, payload}) => {
  switch (type) {
    case GET_STUDENT:
      return {
        ...state,
        [payload.id]: payload
      }

    case GET_STUDENTS:
      return payload.reduce((students, student) => {
        students[student.id] = student
        return students
      }, {})

    case ADD_STUDENT:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_STUDENT:
      return {
        ...state,
        [payload.id]: payload
      }

    default:
      return state
  }
}
