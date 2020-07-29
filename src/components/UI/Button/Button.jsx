import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  const {
    buttonText,
    onClick,
    type,
    disabled
  } = props;
  return (
    <button
      type='button'
      className={`button ${type === 'primary' ? 'button__primary' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.oneOfType([
    PropTypes.bool
  ]).isRequired
};

export default Button;
