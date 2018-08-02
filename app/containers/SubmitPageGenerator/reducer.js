/*
 *
 * SubmitPageGenerator reducer
 *
 */

import { fromJS } from 'immutable';

import { CHANGE_STRING } from './constants';

export const initialState = fromJS({
  currentString: '',
});

function submitPageGeneratorReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STRING:
      return state.set('currentString', action.string);
    default:
      return state;
  }
}

export default submitPageGeneratorReducer;
