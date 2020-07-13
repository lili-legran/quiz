import React from 'react';
import PropTypes from 'prop-types';
import Result from '../../components/Result/Result';
import Button from '../../components/UI/Button/Button';
import './ResultList.scss';

const result = (props) => {
  const {
    quiz,
    answerState,
    quizLength,
    successAnswers,
    onRetry
  } = props;
  return (
    <div className='result-list'>
      <ul className='result-list__list'>
        { quiz.map((currentQuiz, index) => (
          <Result
            key={index}
            currentQuestion={currentQuiz.question}
            currentAnswerState={answerState[index]}
          />
        )) }
      </ul>
      <p>
        {`Correct answers ${successAnswers} из ${quizLength}`}
      </p>
      <div className='result-list__buttons'>
        <Button buttonText='Try again' onClick={onRetry} type='primary' />
        <Button buttonText='To the test list' />
      </div>
    </div>
  );
};

result.propTypes = {
  quiz: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  answerState: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  quizLength: PropTypes.number.isRequired,
  successAnswers: PropTypes.number.isRequired,
  onRetry: PropTypes.func.isRequired
};

export default result;
