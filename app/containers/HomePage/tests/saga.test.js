import { call, put, takeEvery } from 'redux-saga/effects';
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
    expect(getStringsGenerator.next(strings).value).toEqual(
      put(stringsLoaded(strings)),
    );
  });
  it('should be finished', () => {
    expect(getStringsGenerator.next().done).toEqual(true);
  });
});

describe('failed call to getStrings Saga', () => {
  const failedGetStringsGenerator = getStrings();
  failedGetStringsGenerator.next();
  it('should handle errors appropriately', () => {
    expect(failedGetStringsGenerator.throw('error').value).toEqual(
      put(stringLoadingError('error')),
    );
  });
});

describe('stringData Saga', () => {
  const stringDataSaga = stringData();

  it('should start task to watch for LOAD_STRINGS action', () => {
    const takeEveryDescriptor = stringDataSaga.next().value;
    expect(takeEveryDescriptor).toEqual(takeEvery(LOAD_STRINGS, getStrings));
  });
});
