import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  const { buttonText, onClick, type } = props;
  return (
    <button type='button' className={`button ${type === 'primary' ? 'button__primary' : ''}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default Button;
