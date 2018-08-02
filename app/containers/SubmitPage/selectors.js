import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSubmit = state => state.get('submitpage', initialState);

const makeSelectCurrentString = () =>
  createSelector(selectSubmit, submitState => submitState.get('currentString'));

export { makeSelectCurrentString };
