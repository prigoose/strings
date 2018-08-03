import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_STRINGS } from 'containers/App/constants';
import { stringsLoaded, stringLoadingError } from 'containers/App/actions';
import request from 'utils/request';

import stringData, { getStrings, requestURL } from '../saga';


const strings = [
  {
    string: 'HelloKitty',
  },
  {
    string: 'Priya Ghose',
  },
];

describe('successful call to getStrings Saga', () => {
  const getStringsGenerator = getStrings();
  it('should make a request', () => {
    expect(getStringsGenerator.next().value).toEqual(call(request, requestURL));
  });
  it('should dispatch action once strings load', () => {
    expect(getStringsGenerator.next(strings).value).toEqual(put(stringsLoaded(strings)));
  });
  it('should be finished', () => {
    expect(getStringsGenerator.next().done).toEqual(true);
  });
});

// TO DO: research how to appropriately test a failed call.
// describe('failed call to getStrings Saga', () => {
//   const getStringsGenerator2 = getStrings();
//   it('should not match a request to a bad URL', () => {
//     expect(getStringsGenerator2.next().value).toNotEqual(call(request, 'http://xyz.com'));
//   });
//   const error = call(request, 'http://xyz.com');
//   it('should error', () => {
//     expect(getStringsGenerator2.next().next(error)).toEqual(put(stringLoadingError(error)));
//   });
//   it('should be finished', () => {
//     expect(getStringsGenerator2.next().done).toEqual(true);
//   });
// });
