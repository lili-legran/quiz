/* eslint-disable quotes */
import React from 'react';
import PropTypes from 'prop-types';
import QuizItem from '../QuizItem/QuizItem';
import './QuizList.scss';

const QuizList = (props) => {
  const {
    answers,
    choiceAnswer,
    currentQuizIndex,
    currentQuiz
  } = props;
  return (
    <ul className='quiz-list__answers'>
      {answers.map((currentAnswer) => (
        <QuizItem
          currentQuiz={currentQuiz}
          currentQuizIndex={currentQuizIndex}
          answer={currentAnswer.answer}
          answerId={currentAnswer.id}
          choiceAnswer={choiceAnswer}
        />
      ))}
    </ul>
  );
};

QuizList.propTypes = {
  currentList: PropTypes.shape({
    question: PropTypes.string
  }).isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  choiceAnswer: PropTypes.func.isRequired,
  currentQuizIndex: PropTypes.number.isRequired,
  currentQuiz: PropTypes.shape({}).isRequired
};

export default QuizList;
