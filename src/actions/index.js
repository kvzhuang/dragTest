import * as types from '../constants/ActionTypes';
export function add(item) {
  return {
    type: types.ADD,
    number: item
  }
}

export function addToTop(item) {
  return{
    type: types.ADD_TO_TOP,
    number: item
  }
}
