import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import DrawersList from '../../components/Navigation/DrawersList/DrawersList';
import './Layout.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Layout extends React.Component {
  state = {
    isOpenMenu: false,
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
    const { children, isAuthenticated } = this.props;
    const { isOpenMenu } = this.state;
    return (
      <div className='layout'>
        <MenuToggle
          showMenu={this.toggleMenuHandler}
          isOpenMenu={isOpenMenu}
        />
        <DrawersList
          isOpenMenu={isOpenMenu}
          closeMenu={this.closeMenuHandler}
          isAuthenticated={isAuthenticated}
        />
        <div className='layout__main'>
          {children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.authorization.token
  };
}

export default connect(mapStateToProps)(Layout);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};
