/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectCurrentString = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['insert', 'currentString']),
  );

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['strings', 'loading']),
  );

const makeSelectInsertingToDb = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['insert', 'isInserting']),
  );

const makeSelectError = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['strings', 'error']),
  );

const makeSelectDbError = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['insert', 'error']),
  );

const makeSelectStrings = () =>
  createSelector(selectGlobal, globalState =>
    globalState.getIn(['strings', 'items']),
  );

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export {
  selectGlobal,
  makeSelectCurrentString,
  makeSelectLoading,
  makeSelectInsertingToDb,
  makeSelectError,
  makeSelectDbError,
  makeSelectStrings,
  makeSelectLocation,
};
