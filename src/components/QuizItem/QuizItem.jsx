import React from 'react';
import PropTypes from 'prop-types';
import './QuizItem.scss';

class QuizItem extends React.Component {
  clickAnswerHandler = () => {
    const { choiceAnswer, answerId } = this.props;
    choiceAnswer(answerId);
  }

  render() {
    const { answer } = this.props;
    return (
      <li className='quiz-item'>
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
  answerId: PropTypes.number.isRequired
};

export default QuizItem;
