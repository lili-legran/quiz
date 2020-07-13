import React from 'react';
import PropTypes from 'prop-types';
import './Result.scss';

const Result = (props) => {
  const { currentQuestion, currentAnswerState } = props;
  const iconClass = Object.values(currentAnswerState).includes('error') ? 'fa-times result__error' : 'fa-check result__success';
  return (
    <>
      <li className='result'>
        <span>{currentQuestion}</span>
        <i className={`fa ${iconClass}`} />
      </li>
    </>
  );
};

Result.propTypes = {
  currentQuestion: PropTypes.string.isRequired,
  currentAnswerState: PropTypes.shape({}).isRequired
};

export default Result;
