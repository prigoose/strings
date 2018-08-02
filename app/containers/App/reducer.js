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
  loading: false,
  error: false,
  currentString: false,
  strings: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_STRINGS:
      return state
        .set('loading', true)
        .set('error', false)
        .set(['strings'], false);
    case LOAD_STRINGS_SUCCESS:
      return state.set('strings', action.strings).set('loading', false);
    case LOAD_STRINGS_ERROR:
      return state.set('error', action.error).set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
