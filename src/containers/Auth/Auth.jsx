/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import is from 'is_js';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import './Auth.scss';
import axios from '../../axios/axios';

export default class Auth extends React.Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Enter the correct email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: 'Enter the correct password',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  loginHandler = async () => {
    const { formControls } = this.state;

    const authData = {
      email: formControls.email.value,
      password: formControls.password.value,
      returnSecureToken: true
    };

    try {
      await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDOQXf2d47CDvVmjyVX7fn0iAeQYR6M26U', authData);
    } catch (error) {
      console.log(error);
    }
  }

  registerHandler = async () => {
    const { formControls } = this.state;

    const authData = {
      email: formControls.email.value,
      password: formControls.password.value,
      returnSecureToken: true
    };

    try {
      await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDOQXf2d47CDvVmjyVX7fn0iAeQYR6M26U', authData);
    } catch (error) {
      console.log(error);
    }
  }

  submitHandler = (event) => {
    event.preventDefault();
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);
    formControls[controlName] = control;

    let isFormValid = true;
    Object.keys(formControls).forEach((name) => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    this.setState({
      formControls, isFormValid
    });
  }

  // eslint-disable-next-line class-methods-use-this
  validateControl(value, validation) {
    if (!validation) {
      return true;
    }
    let isValid = true;
    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (validation.email) {
      isValid = is.email(value) && isValid;
    }
    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }
    return isValid;
  }

  renderInputs() {
    const { formControls } = this.state;
    return Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          label={control.label}
          valid={control.valid}
          touched={control.touched}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={(event) => this.onChangeHandler(event, controlName)}
        />
      );
    });
  }

  render() {
    const { isFormValid } = this.state;
    return (
      <div className='auth'>
        <h1>Authorization</h1>
        <form className='auth__box' onSubmit={this.submitHandler}>
          {this.renderInputs()}
          <Button
            type='sign-in'
            buttonText='Sign in'
            disabled={!isFormValid}
            onClick={this.loginHandler}
          />
          <Button
            type='sign-up'
            buttonText='Sign up'
            disabled={!isFormValid}
            onClick={this.registerHandler}
          />
        </form>
      </div>
    );
  }
}
