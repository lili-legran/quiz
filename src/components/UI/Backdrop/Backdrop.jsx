/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './Backdrop.scss';

const Backdrop = (props) => {
  const { closeMenu } = props;
  return (
    <div className='backdrop' onClick={closeMenu} />
  );
};

Backdrop.propTypes = {
  closeMenu: PropTypes.func.isRequired
};

export default Backdrop;
