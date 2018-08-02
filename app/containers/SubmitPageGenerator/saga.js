import { select, takeEvery } from 'redux-saga/effects';
import { makeSelectCurrentString } from 'containers/SubmitPageGenerator/selectors';
import { POST_STRING_TO_DB } from 'containers/App/constants';
import post from 'utils/post';

/**
 * String request/response handler
 */
export function* insertString() {
  // Select currentString from store
  console.log('hey?');
  const currentString = yield select(makeSelectCurrentString());
  const requestURL = `http://localhost:3000/strings`;

  const postAttempt = yield post(requestURL, currentString);
  if (postAttempt.status >= 200 && postAttempt.status <= 300) {
    console.log('Successfully posted to db!')
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* stringSubmissions() {
  yield takeEvery(POST_STRING_TO_DB, insertString);
}
