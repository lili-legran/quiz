/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import ResultList from '../ResultList/ResultList';
import Loading from '../../components/UI/Loader/Loader';
import { fetchQuizById, choiceAnswer } from '../../hoc/store/actions/quiz/index';
import { quizRetry } from '../../hoc/store/actions/quiz/actionCreators';
import './Quiz.scss';

class Quiz extends React.Component {
  async componentDidMount() {
    const { match, fetchQuizById } = this.props;
    fetchQuizById(match.params.id);
  }

  choiceAnswerHandler = (answerId) => {
    const { choiceAnswer } = this.props;
    choiceAnswer(answerId);
  }

  render() {
    const {
      quiz,
      isFinished,
      activeQuestion,
      result,
      answerState,
      successAnswers,
      quizRetry
    } = this.props;

    return (
      <div className='quiz'>
        <div className='quiz__wrapper'>
          <h1>{`${!isFinished ? 'Answer the questions' : 'Your result'}`}</h1>
          {
            !quiz.length
              ? <Loading />
              : (
                !isFinished
                  ? (
                    <ActiveQuiz
                      answerNumber={quiz[activeQuestion].id} // id опросника из state
                      answers={quiz[activeQuestion].answers} // массив ответов из текущего опросника
                      quizLength={quiz.length} // длина массива опросников, сколько их всего опросв
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
                      onRetry={quizRetry}
                    />
                  )
              )
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.quiz.result,
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState,
    successAnswers: state.quiz.successAnswers,
    quiz: state.quiz.quiz
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: (id) => dispatch(fetchQuizById(id)),
    choiceAnswer: (answerId) => dispatch(choiceAnswer(answerId)),
    quizRetry: () => dispatch(quizRetry())
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Quiz);

Quiz.propTypes = {
  fetchQuizById: PropTypes.func.isRequired,
  quiz: PropTypes.arrayOf(
    PropTypes.shape({
      answers: PropTypes.arrayOf(
        PropTypes.shape({})
      ),
      id: PropTypes.number,
    })
  ).isRequired,
  activeQuestion: PropTypes.number.isRequired,
  result: PropTypes.shape({}).isRequired,
  answerState: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
  successAnswers: PropTypes.number.isRequired,
  isFinished: PropTypes.bool.isRequired,
  choiceAnswer: PropTypes.func.isRequired,
  quizRetry: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
};
