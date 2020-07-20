import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && touched && shouldValidate;
}

const Input = (props) => {
  const {
    label,
    value,
    onChange,
    type,
    errorMessage
  } = props;
  const inputType = type || 'text';
  const inputId = Math.floor(Math.random() * 1000);

  return (
    <div className={`input ${isInvalid(props) ? 'invalid' : null}`}>
      <label htmlFor={label + inputId}>
        {label}
      </label>
      <input
        type={inputType}
        id={label + inputId}
        value={value}
        autoComplete='on'
        onChange={onChange}
      />
      {
        isInvalid(props)
          ? <span>{errorMessage || 'Enter the correct value'}</span>
          : null
      }
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default Input;
