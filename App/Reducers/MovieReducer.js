import {SET_HOME_MOVIES, SET_MOVIES_BY_TERM, SET_MOVIE} from '../Actions/Keys';
import DefaultState from './Default';

const INIT_STATE = DefaultState.movie;

const MovieReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_HOME_MOVIES:
      return {
        ...state,
        homeMovies: action.payload,
      };
    case SET_MOVIES_BY_TERM:
      return {
        ...state,
        searchedMovies: action.payload,
      };
    case SET_MOVIE:
      return {
        ...state,
        currentMovie: action.payload,
      };
    default:
      return state;
  }
};

export default MovieReducer;
