import { createSelector } from 'reselect';
import { initialState } from './reducer';

// const selectSubmitPageGenerator = state =>
//   state.get('submitPageGenerator', initialState);

const makeSelectCurrentString = () =>
  createSelector(initialState => initialState.currentString, 
    currentString => currentString,
  );

export { makeSelectCurrentString };
