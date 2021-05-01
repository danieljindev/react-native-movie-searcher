import {all} from '@redux-saga/core/effects';
import {
  watchGetHomeMoviesSaga,
  watchGetMovieSaga,
  watchGetMoviesByTermSaga,
} from './MovieSaga';
import {watchGetUserSaga} from './UserSaga';

export default function* rootSaga() {
  yield all([
    watchGetUserSaga(),
    watchGetHomeMoviesSaga(),
    watchGetMovieSaga(),
    watchGetMoviesByTermSaga(),
  ]);
}
