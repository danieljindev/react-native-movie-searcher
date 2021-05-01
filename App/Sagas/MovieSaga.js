import {put, takeLatest} from 'redux-saga/effects';
import {GET_HOME_MOVIES, GET_MOVIE, GET_MOVIES_BY_TERM} from '../Actions/Keys';
import {
  setHomeMovies,
  setMovie,
  setMoviesByTerm,
} from '../Actions/MovieActions';
import {
  getHomeMovies,
  getMovie,
  getMoviesByTerm,
} from '../Services/MovieService';

export function* getHomeMoviesSaga(action) {
  try {
    const movies = yield getHomeMovies();
    yield put(setHomeMovies(movies));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetHomeMoviesSaga() {
  yield takeLatest(GET_HOME_MOVIES, getHomeMoviesSaga);
}

export function* getMoviesByTermSaga(action) {
  try {
    const movies = yield getMoviesByTerm(action.payload);
    yield put(setMoviesByTerm(movies));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetMoviesByTermSaga() {
  yield takeLatest(GET_MOVIES_BY_TERM, getMoviesByTermSaga);
}

export function* getMovieSaga(action) {
  try {
    const movie = yield getMovie(action.payload);
    yield put(setMovie(movie));
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetMovieSaga() {
  yield takeLatest(GET_MOVIE, getMovieSaga);
}
