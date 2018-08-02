/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS,
  LOAD_STRINGS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  strings: {
    loading: false,
    error: false,
    items: [],
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_STRINGS:
      return state
        .setIn(['strings', 'loading'], true)
        .set(['strings', 'error'], false)
        .set(['strings', 'items'], false);
    case LOAD_STRINGS_SUCCESS:
      return state
        .setIn(['strings', 'items'], action.strings)
        .setIn(['strings', 'loading'], false);
    case LOAD_STRINGS_ERROR:
      return state
        .setIn(['strings', 'error'], action.error)
        .setIn(['strings', 'loading'], false);
    default:
      return state;
  }
}

export default appReducer;
