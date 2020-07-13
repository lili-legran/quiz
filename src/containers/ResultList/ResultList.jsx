import React from 'react';
import PropTypes from 'prop-types';
import Result from '../../components/Result/Result';
import './ResultList.scss';

const result = (props) => {
  const {
    quiz,
    answerState,
    quizLength,
    successAnswers
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
    </div>
  );
};

result.propTypes = {
  quiz: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  answerState: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  quizLength: PropTypes.number.isRequired,
  successAnswers: PropTypes.number.isRequired
};

export default result;
