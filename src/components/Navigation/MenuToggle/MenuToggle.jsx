import React from 'react';
import PropTypes from 'prop-types';
import './MenuToggle.scss';

const MenuToggle = (props) => {
  const { showMenu, isOpenMenu } = props;
  return (
    <button type='button' className={`menu-toggle ${isOpenMenu ? 'menu-toggle__open' : 'menu-toggle__close'}`} onClick={showMenu}>
      <i className={`fa ${isOpenMenu ? 'fa-times menu-toggle__open' : 'fa-bars menu-toggle__close'}`} />
    </button>
  );
};

MenuToggle.propTypes = {
  showMenu: PropTypes.func.isRequired,
  isOpenMenu: PropTypes.bool.isRequired
};

export default MenuToggle;
