import {ADD_BATCH, UPDATE_BATCH, GET_BATCHES} from '../actions/batches'
import {GET_BATCH} from '../actions/batches'


export default (state = null, {type, payload}) => {
  switch (type) {
    case ADD_BATCH:
      return {
        ...state,
        [payload.id]: payload
      }

    case GET_BATCH:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_BATCH:
      return {
        ...state,
        [payload.id]: payload
      }

    case GET_BATCHES:
      return payload.reduce((batches, batch) => {
        batches[batch.id] = batch
        return batches
      }, {})

    default:
      return state
  }
}
