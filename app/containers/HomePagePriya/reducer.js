/*
 *
 * HomePagePriya reducer
 *
 */

import { fromJS } from 'immutable';
import { GET_STRINGS } from './constants';

export const initialState = fromJS({
  /* 
  update data upon initial load, or if the user
  has added a new string to the database
  */
  updateData: true,
});

function homePagePriyaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STRINGS:
      return; // can i call a get req from here???
    default:
      return state;
  }
}

export default homePagePriyaReducer;
