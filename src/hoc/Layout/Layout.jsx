import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className='layout'>
        {children}
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
