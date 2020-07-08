import React from 'react';
import PropTypes from 'prop-types';
import QuizList from '../QuizList/QuizList';
import './ActiveQuiz.scss';

const ActiveQuiz = (props) => {
  const {
    answerNumber,
    answers,
    quizLength,
    choiceAnswer,
    currentQuiz
  } = props;
  return (
    <div className='quiz-list'>
      <div className='quiz-list__question'>
        <p>{`${answerNumber}. ${currentQuiz.question}`}</p>
        <small>{`${answerNumber} из ${quizLength}`}</small>
      </div>
      <QuizList
        currentQuiz={currentQuiz}
        currentQuizIndex={answerNumber}
        answers={answers}
        choiceAnswer={choiceAnswer}
      />
    </div>
  );
};

ActiveQuiz.propTypes = {
  answerNumber: PropTypes.number.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  quizLength: PropTypes.number.isRequired,
  choiceAnswer: PropTypes.func.isRequired,
  currentQuiz: PropTypes.shape({
    question: PropTypes.string.isRequired
  }).isRequired
};

export default ActiveQuiz;
