/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const selectRoute = state => state.get('route');

const makeSelectCurrentString = () =>
  createSelector(selectGlobal, globalState => globalState.get('currentString'));

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

const makeSelectStrings = () =>
  createSelector(selectGlobal, globalState => globalState.get('strings'));

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export {
  selectGlobal,
  makeSelectCurrentString,
  makeSelectLoading,
  makeSelectError,
  makeSelectStrings,
  makeSelectLocation,
};
