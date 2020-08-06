/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { validate, validateForm } from './form/formFramework';
import { createQuizQuestion } from '../../hoc/store/actions/quizCreator/actionCreators';
import { finishCreateQuiz } from '../../hoc/store/actions/quizCreator';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';
import './QuizCreator.scss';

function createInput(config, validation) {
  return (
    {
      ...config,
      validation,
      valid: !validation,
      touched: false,
      value: ''
    }
  );
}

function createOptions(number) { //ответы
  return createInput({
    label: `Option ${number}`,
    errorMessage: 'Value cannot empty',
    id: { number }
  }, { required: true });
}

function createFormControl() { //опросник
  return {
    question: createInput({
      label: 'Enter question',
      errorMessage: 'Question cannot empty'
    }, { required: true }),
    option1: createOptions(1),
    option2: createOptions(2),
    option3: createOptions(3),
    option4: createOptions(4),
  };
}

class create extends React.Component {
  state = {
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControl()
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
  }

  addQuestionHandler = (event) => {
    event.preventDefault();
    const { quiz, createQuizQuestion } = this.props;
    const { formControls } = this.state;

    const {
      question,
      option1,
      option2,
      option3,
      option4
    } = formControls;

    const questionItem = {
      question: question.value,
      id: quiz.length + 1,
      // eslint-disable-next-line react/destructuring-assignment
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        { text: option1.value, id: option1.id },
        { text: option2.value, id: option2.id },
        { text: option3.value, id: option3.id },
        { text: option4.value, id: option4.id },
      ]
    };

    console.log('questionItem', questionItem);
    createQuizQuestion(questionItem);

    this.setState({
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControl()
    });
  }

  createQuizHandler = (event) => {
    event.preventDefault();

    const { finishCreateQuiz } = this.props;

    this.setState({
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControl()
    });

    finishCreateQuiz();
  }

  changeInputHandler = (value, controlName) => {
    const { formControls } = this.state;
    const formControlsCopy = { ...formControls };
    const control = { ...formControlsCopy[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControlsCopy[controlName] = control;

    this.setState({
      formControls: formControlsCopy,
      isFormValid: validateForm(formControls)
    });
  }

  renderInputs = () => {
    const { formControls } = this.state;
    return Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName];
      return (
        <div key={index}>
          <Input
            label={control.label}
            value={control.value}
            errorMessage={control.errorMessage}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            onChange={(event) => this.changeInputHandler(event.target.value, controlName)}
          />
          { index === 0 ? <hr /> : null }
        </div>
      );
    });
  }

  selectChangeHandler = (event) => {
    this.setState({
      rightAnswerId: +event.target.value
    });
  }

  render() {
    const { rightAnswerId, isFormValid } = this.state;
    const { quiz } = this.props;
    const select = (
      <Select
        label='Сhoose the correct answer'
        value={rightAnswerId}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, id: 1 },
          { text: 2, id: 2 },
          { text: 3, id: 3 },
          { text: 4, id: 4 }
        ]}
      />
    );

    console.log('quiz', quiz);

    return (
      <div className='quiz-creator'>
        <h1>Quiz Creator</h1>
        <form onSubmit={this.onSubmitHandler} className='quiz-creator__form'>
          {this.renderInputs()}
          {select}
          <Button
            type='primary'
            buttonText='Add question'
            onClick={this.addQuestionHandler}
            disabled={!isFormValid}
          />
          <Button
            type='success'
            buttonText='Create quiz'
            onClick={this.createQuizHandler}
            disabled={quiz.length === 0}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quiz: state.create.quiz
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createQuizQuestion: (item) => dispatch(createQuizQuestion(item)),
    finishCreateQuiz: () => dispatch(finishCreateQuiz())
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(create);

create.propTypes = {
  quiz: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  finishCreateQuiz: PropTypes.func.isRequired,
  createQuizQuestion: PropTypes.func.isRequired
};
