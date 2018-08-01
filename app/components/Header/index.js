import React from 'react';
import HeaderLink from './HeaderLink';
import NavBar from './NavBar';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <NavBar>
        <HeaderLink to="/">Strings</HeaderLink>
        <HeaderLink to="/submit">Submit!</HeaderLink>
      </NavBar>
    );
  }
}

export default Header;
