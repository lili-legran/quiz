import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '../Drawer/Drawer';
import Backdrop from '../../UI/Backdrop/Backdrop';
import './DrawersList.scss';

const DrawerList = (props) => {
  const { drawersList, isOpenMenu, closeMenu } = props;
  return (
    <>
      <ul className={`drawers-list ${isOpenMenu ? 'open' : 'close'}`}>
        { drawersList.map((drawerItem, index) => (
          <Drawer
            key={index}
            drawerItem={drawerItem}
            closeMenu={closeMenu}
          />
        ))}
      </ul>
      {isOpenMenu ? <Backdrop closeMenu={closeMenu} /> : null }
    </>
  );
};

DrawerList.propTypes = {
  drawersList: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpenMenu: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired
};

export default DrawerList;
