import { select, takeEvery } from 'redux-saga/effects';
import { makeSelectCurrentString } from 'containers/SubmitPage/selectors';
import { POST_STRING_TO_DB } from 'containers/App/constants';
import post from 'utils/post';

/**
 * String request/response handler
 */
export function* insertString() {
  // Select currentString from store
  const currentString = yield select(makeSelectCurrentString());
  const requestURL = `http://localhost:3000/strings`;

  const postAttempt = yield post(requestURL, currentString);
  // to do: add error handling
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* stringSubmissions() {
  yield takeEvery(POST_STRING_TO_DB, insertString);
}
