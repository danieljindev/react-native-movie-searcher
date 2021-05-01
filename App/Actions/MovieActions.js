import {
  GET_HOME_MOVIES,
  SET_HOME_MOVIES,
  GET_MOVIES_BY_TERM,
  SET_MOVIES_BY_TERM,
  GET_MOVIE,
  SET_MOVIE,
} from './Keys';

export const getHomeMovies = () => ({
  type: GET_HOME_MOVIES,
});

export const setHomeMovies = (movies) => ({
  type: SET_HOME_MOVIES,
  payload: movies,
});

export const getMoviesByTerm = (term) => ({
  type: GET_MOVIES_BY_TERM,
  payload: term,
});

export const setMoviesByTerm = (movies) => ({
  type: SET_MOVIES_BY_TERM,
  payload: movies,
});

export const getMovie = (id) => ({
  type: GET_MOVIE,
  payload: id,
});

export const setMovie = (movie) => ({
  type: SET_MOVIE,
  payload: movie,
});
