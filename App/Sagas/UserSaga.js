import {takeLatest} from 'redux-saga/effects';
import {GET_USER} from '../Actions/Keys';

export function* getUserSaga(action) {
  try {
    // Here call Service from UserService
  } catch (error) {}
}
export function* watchGetUserSaga() {
  yield takeLatest(GET_USER, getUserSaga);
}
