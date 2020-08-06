import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '../Drawer/Drawer';
import Backdrop from '../../UI/Backdrop/Backdrop';
import './DrawersList.scss';

const DrawerList = (props) => {
  const {
    isOpenMenu,
    closeMenu,
    isAuthenticated
  } = props;
  const links = [
    { to: '/', label: 'Quiz List', exact: true }
  ];

  if (isAuthenticated) {
    links.push(
      { to: '/quiz-creator', label: 'Quiz Creator', exact: false },
      { to: '/logout', label: 'Exit', exact: false }
    );
  } else {
    links.push(
      { to: '/auth', label: 'Authorization', exact: false }
    );
  }

  return (
    <>
      <ul className={`drawers-list ${isOpenMenu ? 'open' : 'close'}`}>
        { links.map((drawerItem, index) => (
          <Drawer
            key={index}
            drawerItem={drawerItem}
            closeMenu={closeMenu}
            isAuthenticated={isAuthenticated}
          />
        ))}
      </ul>
      {isOpenMenu ? <Backdrop closeMenu={closeMenu} /> : null }
    </>
  );
};

DrawerList.propTypes = {
  isOpenMenu: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default DrawerList;
