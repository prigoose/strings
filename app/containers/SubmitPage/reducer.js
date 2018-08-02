/*
 *
 * SubmitPage reducer
 *
 */

import { fromJS } from 'immutable';

import { POST_STRING_TO_DB } from 'containers/App/constants';
import { CHANGE_STRING } from './constants';

export const initialState = fromJS({
  currentString: '',
  loading: false,
});

function submitPageGeneratorReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STRING:
      return state.set('currentString', action.string);
    case POST_STRING_TO_DB:
      return state.set('loading', true);
    default:
      return state;
  }
}

export default submitPageGeneratorReducer;
