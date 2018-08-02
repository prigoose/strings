/*
 *
 * SubmitPageGenerator reducer
 *
 */

import { fromJS } from 'immutable';
import { SUBMIT_STRING } from './constants';

export const initialState = fromJS({});

function submitPageGeneratorReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_STRING:
      return state;
    default:
      return state;
  }
}

export default submitPageGeneratorReducer;
