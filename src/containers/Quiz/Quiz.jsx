import React from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import './Quiz.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Quiz extends React.Component {
  state = {
    isFinished: false,
    activeQuestion: 0,
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
        rightAnswerId: 1,
        answers: [
          { answer: 'Draco Malfoy', id: 1 },
          { answer: 'Tom Riddle', id: 2 },
          { answer: 'Remus Lupin', id: 3 },
          { answer: 'Sirius Black', id: 4 },
        ]
      }
    ]
  }

  choiceAnswerHandler = (answerId) => {
    const { quiz, activeQuestion } = this.state;
    const currentAnswerObj = quiz[activeQuestion];
    // eslint-disable-next-line no-undef
    const timeout = window.setTimeout(() => {
      if (currentAnswerObj.rightAnswerId === answerId) {
        this.setState({
          activeQuestion: activeQuestion + 1
        });
      }
    }, 1000);
  }

  render() {
    const { quiz, isFinished, activeQuestion } = this.state;
    return (
      <div className='quiz'>
        <div className='quiz__wrapper'>
          <h1>Answer the questions</h1>
          {
            !isFinished
              ? (
                <ActiveQuiz
                  answerNumber={quiz[activeQuestion].id} // id опросника из state
                  answers={quiz[activeQuestion].answers} // массив ответов из текущего опросника
                  quizLength={quiz.length} // длина массива опросников, сколько их всего опроснкв
                  choiceAnswer={this.choiceAnswerHandler} // обработчик-функция клика-ответа
                  currentQuiz={quiz[activeQuestion]}
                />
              )
              : (
                <FinishedQuiz
                  answerNumber={quiz[activeQuestion].id} // id опросника из state
                  answers={quiz[activeQuestion].answers} // массив ответов из текущего опросника
                  quizLength={quiz.length} // длина массива опросников, сколько их всего опроснкв
                  choiceAnswer={this.choiceAnswerHandler} // обработчик-функция клика-ответа
                  currentQuiz={quiz[activeQuestion]}
                />
              )
          }
        </div>
      </div>
    );
  }
}

export default Quiz;
