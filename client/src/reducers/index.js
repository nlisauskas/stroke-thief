import { combineReducers } from 'redux';
import coursesReducer from './courses';
import usersReducer from './user';
import roundsReducer from './rounds';

export default combineReducers({
  users: usersReducer,
  courses: coursesReducer,
  rounds: roundsReducer
});
