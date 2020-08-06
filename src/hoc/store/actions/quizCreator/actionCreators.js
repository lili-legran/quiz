import { CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION } from './actionTypes';

export function createQuizQuestion(item) {
  return {
    type: CREATE_QUIZ_QUESTION,
    item
  };
}

export function resetQuizCreation() {
  return {
    type: RESET_QUIZ_CREATION
  };
}
