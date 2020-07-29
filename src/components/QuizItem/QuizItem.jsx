import React from 'react';
import PropTypes from 'prop-types';
import './QuizItem.scss';

class QuizItem extends React.Component {
  clickAnswerHandler = () => {
    const { choiceAnswer, answerId } = this.props;
    choiceAnswer(answerId.number);
  }

  render() {
    const { answer, answerId, result } = this.props;
    return (
      <li className={`quiz-item ${result[answerId.number] || ''}`}>
        <button type='button' className='quiz-item__button' onClick={this.clickAnswerHandler}>
          { answer }
        </button>
      </li>
    );
  }
}

QuizItem.propTypes = {
  answer: PropTypes.string.isRequired,
  choiceAnswer: PropTypes.func.isRequired,
  answerId: PropTypes.shape({
    number: PropTypes.number
  }).isRequired,
  result: PropTypes.shape({}).isRequired
};

export default QuizItem;
