import {ADD_BATCH, UPDATE_BATCH, UPDATE_BATCHES} from '../actions/batches'

/*
The state will contain the batches in an object with the batch ID as key
*/

export default (state = null, {type, payload}) => {
  switch (type) {
    case ADD_BATCH:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_BATCH:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_BATCHES:
      return payload.reduce((batches, batch) => {
        batches[batch.id] = batch
        return batches
      }, {})

    default:
      return state
  }
}
