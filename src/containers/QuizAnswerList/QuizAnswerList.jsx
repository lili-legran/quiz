import React from 'react';
import { NavLink } from 'react-router-dom';
import './QuizAnswerList.scss';

export default class QuizAnswerList extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => (
      <li key={index}>
        <NavLink to={`/quiz/${quiz}`}>
          {`Quiz${quiz}`}
        </NavLink>
      </li>
    ));
  }

  render() {
    return (
      <div className='quiz-answer-list'>
        <h1>Quiz List</h1>
        <ul>
          {this.renderQuizes()}
        </ul>
      </div>
    );
  }
}
