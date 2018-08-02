import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the submitPageGenerator state domain
 */

const selectSubmitPageGeneratorDomain = state =>
  state.get('submitPageGenerator', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SubmitPageGenerator
 */

const makeSelectSubmitPageGenerator = () =>
  createSelector(selectSubmitPageGeneratorDomain, substate => substate.toJS());

export default makeSelectSubmitPageGenerator;
export { selectSubmitPageGeneratorDomain };
