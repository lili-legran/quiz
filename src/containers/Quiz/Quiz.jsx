/* eslint-disable no-undef */
import React from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import ResultList from '../ResultList/ResultList';
import './Quiz.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Quiz extends React.Component {
  state = {
    result: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: [],
    successAnswers: 0,
    quiz: [
      {
        question: 'Who wrote books about Harry Potter?',
        id: 1,
        rightAnswerId: 3,
        answers: [
          { answer: 'Anne Rice', id: 1 },
          { answer: 'John Tolkien', id: 2 },
          { answer: 'Joanne Rowling', id: 3 },
          { answer: 'George Martin', id: 4 },
        ]
      },
      {
        question: 'What was Voldemorts name before his rebirth?',
        id: 2,
        rightAnswerId: 2,
        answers: [
          { answer: 'Draco Malfoy', id: 1 },
          { answer: 'Tom Riddle', id: 2 },
          { answer: 'Remus Lupin', id: 3 },
          { answer: 'Sirius Black', id: 4 },
        ]
      },
      {
        question: 'Who was the patronus of Harry Potter?',
        id: 3,
        rightAnswerId: 4,
        answers: [
          { answer: 'Phoenix', id: 1 },
          { answer: 'Lion', id: 2 },
          { answer: 'Bear', id: 3 },
          { answer: 'Deer', id: 4 },
        ]
      }
    ]
  }

  choiceAnswerHandler = (answerId) => {
    const {
      quiz,
      activeQuestion,
      result,
      answerState,
      successAnswers
    } = this.state;
    const currentAnswerObj = quiz[activeQuestion];
    let currentResult = {};
    if (currentAnswerObj.rightAnswerId === answerId) {
      currentResult = { [answerId]: 'success' };
      this.setState({
        result: { [answerId]: 'success' }
      });
      const timeout = window.setTimeout(() => {
        this.setState({
          activeQuestion: activeQuestion + 1,
          result: {},
          isFinished: activeQuestion + 1 === quiz.length
        });
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      currentResult = { [answerId]: 'error' };
      this.setState({
        result: { [answerId]: 'error' }
      });
    }
    if (Object.keys(result).length === 0) {
      this.setState({
        answerState: [...answerState, currentResult]
      }, () => {
        const {
          // eslint-disable-next-line no-shadow
          answerState
        } = this.state;
        answerState.forEach((answerObj) => {
          const valueObject = Object.values(answerObj);
          if (valueObject[0] === 'success') {
            this.setState({
              successAnswers: successAnswers + 1
            });
          } else {
            this.setState({
              successAnswers
            });
          }
        });
      });
    }
  }

  retryHandler = () => {
    this.setState({
      result: {},
      isFinished: false,
      activeQuestion: 0
    });
  }

  render() {
    const {
      quiz,
      isFinished,
      activeQuestion,
      result,
      answerState,
      successAnswers
    } = this.state;
    return (
      <div className='quiz'>
        <div className='quiz__wrapper'>
          <h1>{`${!isFinished ? 'Answer the questions' : 'Your result'}`}</h1>
          {
            !isFinished
              ? (
                <ActiveQuiz
                  answerNumber={quiz[activeQuestion].id} // id опросника из state
                  answers={quiz[activeQuestion].answers} // массив ответов из текущего опросника
                  quizLength={quiz.length} // длина массива опросников, сколько их всего опроснкв
                  choiceAnswer={this.choiceAnswerHandler} // обработчик-функция клика-ответа
                  currentQuiz={quiz[activeQuestion]}
                  result={result}
                  isFinished={this.isFinishedHandler}
                />
              )
              : (
                <ResultList
                  quiz={quiz}
                  answerState={answerState}
                  quizLength={quiz.length}
                  successAnswers={successAnswers}
                  onRetry={this.retryHandler}
                />
              )
          }
        </div>
      </div>
    );
  }
}

export default Quiz;
