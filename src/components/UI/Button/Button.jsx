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
  /* eslint-disable react/require-default-props */
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool
  /* eslint-enable react/require-default-props */
};

export default Button;
