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
    currentQuiz,
    result
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
        result={result}
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
  }).isRequired,
  result: PropTypes.shape({}).isRequired
};

export default ActiveQuiz;
