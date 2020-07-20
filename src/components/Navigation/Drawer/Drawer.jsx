import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Drawer.scss';

const Drawer = (props) => {
  const { drawerItem, closeMenu } = props;
  return (
    <li className='drawer'>
      <NavLink
        to={drawerItem.to}
        exact={drawerItem.exact}
        onClick={closeMenu}
        activeClassName='active' // не понадобится скорее всего
      >
        {drawerItem.label}
      </NavLink>
    </li>
  );
};

Drawer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  drawerItem: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({})
  ]),
  closeMenu: PropTypes.func.isRequired
};

export default Drawer;
