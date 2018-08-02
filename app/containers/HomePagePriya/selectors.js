/*
I don't think this is a good use case for a selector.
Implement the home page without a selector, then add a selector 
to another section
*/

/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const makeSelectUpdateData = () =>
  createSelector(
    state => state.get('homePagePriya', initialState),
    homeState => homeState.get('updateData'),
  );

export { makeSelectUpdateData };
