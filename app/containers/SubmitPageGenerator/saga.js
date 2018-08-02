import { call, put, select, takeEvery } from 'redux-saga/effects';
import { INSERT_STRING } from 'containers/App/constants';
import { stringInserted, stringInsertingError } from 'containers/App/actions';

// import request from 'utils/request';
import { makeSelectCurrentString } from 'containers/SubmitPageGenerator/selectors';

/**
 * Strings request/response handler
 */
export function* insertString() {
  // Select currentString from store
  const currentString = yield select(makeSelectCurrentString());
  
  console.log('in the insert string fxn')
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
  // Watches for INSERT_STRING actions and calls insertString when one comes in.
  yield takeEvery(INSERT_STRING, insertString);
}
