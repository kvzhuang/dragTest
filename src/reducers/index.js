import { combineReducers } from 'redux';
import { ADD, ADD_TO_TOP, MODIFY } from '../constants/ActionTypes';
// import A_reducer from './A_reducer'

function number (state = [0], action) {
  switch (action.type) {
    case ADD:
      return state.concat(action.number)
    case ADD_TO_TOP:
      return [action.number, ...state]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  number
})

export default rootReducer
