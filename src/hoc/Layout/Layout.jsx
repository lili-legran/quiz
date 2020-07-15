import React from 'react';
import PropTypes from 'prop-types';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import DrawersList from '../../components/Navigation/DrawersList/DrawersList';
import './Layout.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Layout extends React.Component {
  state = {
    isOpenMenu: false,
    drawersList: [
      { to: '/', label: 'Quiz List', exact: true },
      { to: '/auth', label: 'Authorization', exact: false },
      { to: '/quiz-creator', label: 'Quiz Creator', exact: false }
    ]
  }

  toggleMenuHandler = () => {
    const { isOpenMenu } = this.state;
    this.setState({
      isOpenMenu: !isOpenMenu
    });
  }

  closeMenuHandler = () => {
    this.setState({
      isOpenMenu: false
    });
  }

  render() {
    const { children } = this.props;
    const { isOpenMenu, drawersList } = this.state;
    return (
      <div className='layout'>
        <MenuToggle
          showMenu={this.toggleMenuHandler}
          isOpenMenu={isOpenMenu}
        />
        <DrawersList
          drawersList={drawersList}
          isOpenMenu={isOpenMenu}
          closeMenu={this.closeMenuHandler}
        />
        <div className='layout__main'>
          {children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]).isRequired
};

export default Layout;
