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
} from './actionTypes';

export function fetchQuizStart() {
  return {
    type: FETCH_QUIZES_START
  };
}

export function quizRetry() {
  return {
    type: QUIZ_RETRY
  };
}

export function fetchQuizesSuccess(quizes) {
  return {
    type: FETCH_QUIZES_SUCCESS,
    quizes
  };
}

export function fetchQuizError(e) {
  return {
    type: FETCH_QUIZES_ERROR,
    error: e
  };
}

export function fetchQuizSuccess(quiz) {
  return {
    type: FETCH_QUIZ_SUCCESS,
    quiz
  };
}

export function quizNextQuestion({ activeQuestion, isFinished }) {
  return {
    type: QUIZ_NEXT_QUESTION,
    activeQuestion,
    isFinished
  };
}

export function quizSetResult(result) {
  return {
    type: QUIZ_SET_RESULT,
    result
  };
}

export function setAnswerState(answerState) {
  return {
    type: SET_ANSWER_STATE,
    answerState
  };
}

export function setSuccessAnswers(successAnswers) {
  return {
    type: SET_SUCCESS_ANSWERS,
    successAnswers
  };
}