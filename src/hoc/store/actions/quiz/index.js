/* eslint-disable no-undef */
import axios from '../../../../axios/axios';
import {
  fetchQuizStart,
  quizRetry,
  fetchQuizesSuccess,
  fetchQuizError,
  fetchQuizSuccess,
  quizNextQuestion,
  quizSetResult,
  setAnswerState,
  setSuccessAnswers
} from './actionCreators';

export function fetchQuizes() {
  return async (dispatch) => {
    dispatch(fetchQuizStart());

    try {
      const response = await axios.get('/potter-quizes.json');

      const quizes = [];

      Object.keys(response.data).map((key, index) => (
        quizes.push({
          id: key,
          name: `Quiz №${index + 1}`
        })
      ));
      dispatch(fetchQuizesSuccess(quizes));
    } catch (e) {
      dispatch(fetchQuizError(e));
    }
  };
}

export function fetchQuizById(id) {
  return async (dispatch) => {
    dispatch(fetchQuizStart());
    dispatch(quizRetry());
    try {
      const response = await axios.get(`/potter-quizes/${id}.json`);
      const quiz = response.data;

      dispatch(fetchQuizSuccess(quiz));
    } catch (e) {
      dispatch(fetchQuizError(e));
    }
  };
}

export function choiceAnswer(answerId) {
  return (dispatch, getState) => {
    const quizStateCopy = getState().quiz;
    const {
      activeQuestion,
      result,
      answerState,
      successAnswers
    } = quizStateCopy;

    const currentAnswerObj = quizStateCopy.quiz[activeQuestion];
    let currentResult = {};
    if (currentAnswerObj.rightAnswerId === answerId) {
      currentResult = { [answerId]: 'success' };
      dispatch(quizSetResult(currentResult));
      const timeout = window.setTimeout(() => {
        dispatch(quizNextQuestion({
          activeQuestion: activeQuestion + 1,
          isFinished: activeQuestion + 1 === quizStateCopy.quiz.length
        }));
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      currentResult = { [answerId]: 'error' };
      dispatch(quizSetResult(currentResult));
    }

    if (Object.keys(result).length === 0) {
      dispatch(setAnswerState([...answerState, currentResult]));

      const valueObject = Object.values(currentResult);
      if (valueObject[0] === 'success') {
        dispatch(setSuccessAnswers(successAnswers + 1));
      }
    }
  };
}
