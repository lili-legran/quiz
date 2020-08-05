/* eslint-disable no-console */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchQuizes } from '../../hoc/store/actions/quiz';
import Loading from '../../components/UI/Loader/Loader';
import './QuizAnswerList.scss';

class QuizAnswerList extends React.Component {
  componentDidMount() {
    const { fetchQuizes } = this.props;
    fetchQuizes();
  }

  renderQuizes() {
    const { quizes } = this.props;
    return quizes.map((quiz, index) => (
      <li key={index}>
        <NavLink to={`/quiz/${quiz.id}`}>
          {quiz.name}
        </NavLink>
      </li>
    ));
  }

  render() {
    const { loading, quizes } = this.props;
    return (
      <div className='quiz-answer-list'>
        <h1>Quiz List</h1>
        <ul>
          {
            loading && quizes.length !== 0
              ? <Loading />
              : this.renderQuizes()
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes())
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(QuizAnswerList);

QuizAnswerList.propTypes = {
  quizes: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchQuizes: PropTypes.func.isRequired
};
