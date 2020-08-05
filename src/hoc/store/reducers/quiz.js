import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
  FETCH_QUIZ_SUCCESS,
  QUIZ_SET_RESULT,
  QUIZ_NEXT_QUESTION,
  SET_ANSWER_STATE,
  SET_SUCCESS_ANSWERS,
  QUIZ_RETRY
} from '../actions/quiz/actionTypes';

const initialState = {
  // список тестов на странице quiz list
  quizes: [],
  // состояние loader'a
  loading: false,
  // ошибка запроса
  error: null,
  // результат ответа на текущий вопрос в виде {id ответа: success/error}
  result: {},
  // массив ответов из объектов state.result
  answerState: [],
  // завершен ли тест
  isFinished: false,
  // текущий вопрос, +1 при переходе к следующему
  activeQuestion: 0,
  // счетчик правильных ответов
  successAnswers: 0,
  // массив данных (вопрос, ответы и тд.) текущего теста, результат запроса с firebase
  quiz: []
};

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUIZES_START:
      return {
        ...state, loading: true
      };
    case FETCH_QUIZES_SUCCESS:
      return {
        ...state, loading: false, quizes: action.quizes
      };
    case FETCH_QUIZES_ERROR:
      return {
        ...state, loading: false, error: action.error
      };
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state, quiz: action.quiz
      };
    case QUIZ_SET_RESULT:
      return {
        ...state, result: action.result
      };
    case QUIZ_NEXT_QUESTION:
      return {
        ...state,
        activeQuestion: action.activeQuestion,
        isFinished: action.isFinished,
        result: {}
      };
    case SET_ANSWER_STATE:
      return {
        ...state, answerState: action.answerState
      };
    case SET_SUCCESS_ANSWERS:
      return {
        ...state, successAnswers: action.successAnswers
      };
    case QUIZ_RETRY:
      return {
        ...state,
        result: {},
        isFinished: false,
        activeQuestion: 0,
        successAnswers: 0,
        answerState: []
      };
    default:
      return state;
  }
}
