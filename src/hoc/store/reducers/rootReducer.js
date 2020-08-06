import { combineReducers } from 'redux';
import quizReducer from './quiz';
import createReducer from './actionCreators';

export default combineReducers({
  quiz: quizReducer,
  create: createReducer
});
