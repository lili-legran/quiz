/* eslint-disable no-console */
import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from '../../axios/axios';
import Loading from '../../components/UI/Loader/Loader';
import './QuizAnswerList.scss';

export default class QuizAnswerList extends React.Component {
  state = {
    quizes: [],
    loading: true
  }

  async componentDidMount() {
    const quizesCopy = [];

    try {
      const response = await axios.get('/potter-quizes.json');

      Object.keys(response.data).map((key, index) => (
        quizesCopy.push({
          id: key,
          name: `Quiz №${index + 1}`
        })
      ));
      console.log(quizesCopy);
    } catch (error) {
      console.log(error);
    }

    this.setState({
      quizes: quizesCopy,
      loading: false
    });
  }

  // eslint-disable-next-line class-methods-use-this
  renderQuizes() {
    const { quizes } = this.state;
    return quizes.map((quiz, index) => (
      <li key={index}>
        <NavLink to={`/quiz/${quiz.id}`}>
          {quiz.name}
        </NavLink>
      </li>
    ));
  }

  render() {
    const { loading } = this.state;
    return (
      <div className='quiz-answer-list'>
        <h1>Quiz List</h1>
        <ul>
          {
            loading
              ? <Loading />
              : this.renderQuizes()
          }
        </ul>
      </div>
    );
  }
}
