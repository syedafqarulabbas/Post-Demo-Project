// saga.js
import { takeLatest, put } from 'redux-saga/effects';
import { SIGN_UP_REQUEST, LOGIN_REQUEST } from './action';
import { signUpSuccess, loginSuccess } from './action';

function* handleSignUp(action) {
  
  yield put(signUpSuccess(action.payload));
}

function* handleLogin(action) {
  
  yield put(loginSuccess(action.payload));
}

function* watchAuth() {
  yield takeLatest(SIGN_UP_REQUEST, handleSignUp);
  yield takeLatest(LOGIN_REQUEST, handleLogin);
  
}

export default function* rootSaga() {
  yield watchAuth();
  
}
