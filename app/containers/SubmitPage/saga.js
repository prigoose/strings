import { put, select, takeEvery } from 'redux-saga/effects';
import { makeSelectCurrentString } from 'containers/SubmitPage/selectors';
import { POST_STRING_TO_DB } from 'containers/App/constants';
import post from 'utils/post';
import { CHANGE_STRING } from './constants';

/**
 * String request/response handler
 */
export function* insertString() {
  // Select currentString from store
  const currentString = yield select(makeSelectCurrentString());
  const requestURL = `http://localhost:3000/strings`;

  // to do: add error handling, make use of async
  yield post(requestURL, currentString);
  yield put({ type: CHANGE_STRING, string: '' });
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* stringSubmissions() {
  yield takeEvery(POST_STRING_TO_DB, insertString);
}
