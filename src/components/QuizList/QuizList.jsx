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
    currentQuiz,
    result
  } = props;
  return (
    <ul className='quiz-list__answers'>
      {answers.map((currentAnswer, index) => (
        <QuizItem
          key={index}
          currentQuiz={currentQuiz}
          currentQuizIndex={currentQuizIndex}
          answer={currentAnswer.answer}
          answerId={currentAnswer.id}
          choiceAnswer={choiceAnswer}
          result={result}
        />
      ))}
    </ul>
  );
};

QuizList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  choiceAnswer: PropTypes.func.isRequired,
  currentQuizIndex: PropTypes.number.isRequired,
  currentQuiz: PropTypes.shape({}).isRequired,
  result: PropTypes.shape({}).isRequired
};

export default QuizList;
