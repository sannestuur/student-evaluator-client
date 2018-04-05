import {ADD_EVALUATION, UPDATE_EVALUATION, UPDATE_EVALUATIONS} from '../actions/evaluations'

export default (state = null, {type, payload}) => {
  switch (type) {
    case ADD_EVALUATION:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_EVALUATION:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_EVALUATIONS:
      return payload.reduce((evaluations, evaluation) => {
        evaluations[evaluation.id] = evaluation
        return evaluations
      }, {})

    default:
      return state
  }
}
