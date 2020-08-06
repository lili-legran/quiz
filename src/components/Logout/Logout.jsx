import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../hoc/store/actions/authorization/actionCreator';

class Logout extends React.Component {
  componentDidMount() {
    const { logout } = this.props;
    logout();
  }

  render() {
    return <Redirect to='/' />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
}

export default connect(
  null, mapDispatchToProps
)(Logout);

Logout.propTypes = {
  logout: PropTypes.func.isRequired
};
