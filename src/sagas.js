import { fork, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import screenshotSagas from './sagas/screenshot';
import firebase from './firebase';

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();


function* loginGoogleUser() {
  try {
    const user = yield call(() => auth.signInWithPopup(googleProvider));
    yield put({type: "LOGIN_USER_SUCCESS", payload: user});
  } catch (e) {
    yield put({type: "LOGIN_USER_FAILED", payload: e.message});
  }
}

function* mySaga() {
  yield takeEvery("LOGIN_USER_REQUEST", loginGoogleUser);
  yield [fork(screenshotSagas)];
}

export default mySaga;
