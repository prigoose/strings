import { call, put, select, takeEvery } from 'redux-saga/effects';
import { makeSelectCurrentString } from 'containers/SubmitPageGenerator/selectors';
import { POST_STRING_TO_DB } from 'containers/App/constants';

/**
 * String request/response handler
 */
export function* insertString() {
  // Select currentString from store
  const currentString = yield select(makeSelectCurrentString());
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  // try {
  //   // Call our request helper (see 'utils/request')
  //   const repos = yield call(request, requestURL);
  //   yield put(reposLoaded(repos, username));
  // } catch (err) {
  //   yield put(repoLoadingError(err));
  // }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* stringSubmissions() {
  yield takeEvery(POST_STRING_TO_DB, insertString);
}
