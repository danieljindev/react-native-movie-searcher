import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import MovieReducer from './MovieReducer';

export default combineReducers({
  user: UserReducer,
  movie: MovieReducer,
});
