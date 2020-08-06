import { combineReducers } from 'redux';
import quizReducer from './quiz';
import createReducer from './actionCreators';
import authorizationReducer from './authorization';

export default combineReducers({
  quiz: quizReducer,
  create: createReducer,
  authorization: authorizationReducer
});
