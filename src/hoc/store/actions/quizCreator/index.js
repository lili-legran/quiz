import axios from '../../../../axios/axios';
import { resetQuizCreation } from './actionCreators';

export function finishCreateQuiz() {
  return async (dispatch, getState) => {
    await axios.post('potter-quizes.json', getState().create.quiz);
    dispatch(resetQuizCreation());
  };
}
