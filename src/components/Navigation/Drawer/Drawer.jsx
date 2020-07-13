import React from 'react';
import PropTypes from 'prop-types';
import './Drawer.scss';

const Drawer = (props) => {
  const { drawerItem } = props;
  return (
    <li className='drawer'>
      {drawerItem}
    </li>
  );
};

Drawer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  drawerItem: PropTypes.string
};

export default Drawer;
