/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './QuizAnswerList.scss';

export default class QuizAnswerList extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={`/quiz/${quiz}`}>
            Quiz
            {quiz}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <div className='quiz-answer-list'>
        <div>
          <h1>Quiz List</h1>
          <ul>
            {this.renderQuizes()}
          </ul>
        </div>
      </div>
    );
  }
}
