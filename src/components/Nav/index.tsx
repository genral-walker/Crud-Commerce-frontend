import React, { Component } from 'react';
import { NavWrapper } from './styles';
import { ROUTES } from 'constants/routes';

export default class Nav extends Component {
  render() {
    return (
      <NavWrapper>
        <h3>Scandiweb Ecommerce</h3>
      </NavWrapper>
    );
  }
}
