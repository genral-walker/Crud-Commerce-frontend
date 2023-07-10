import { Component } from 'react';
import { NavWrapper } from './styles';
import { navigate } from 'utils/navigate';
import { ROUTES } from 'constants/routes';

export default class Nav extends Component {
  render() {
    return (
      <NavWrapper>
        <h3
          onClick={() =>
            window.location.pathname !== ROUTES.PRODUCTS &&
            navigate(ROUTES.PRODUCTS)
          }
        >
          Scandiweb Ecommerce
        </h3>
      </NavWrapper>
    );
  }
}
