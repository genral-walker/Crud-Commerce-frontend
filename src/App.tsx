import Nav from 'components/Nav';
import { ROUTES } from 'constants/routes';
import { THEME } from 'constants/theme';
import NewProduct from 'pages/Product/NewProduct';
import ProductList from 'pages/Product/ProductList';
import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { navigate } from 'utils/navigate';

export default class App extends Component {
  render() {
    const fetchRoute = () => {
      switch (window.location.pathname) {
        case ROUTES.PRODUCTS:
          return <ProductList />;

        case ROUTES.NEW_PRODUCT:
          return <NewProduct />;

        default:
          navigate(ROUTES.PRODUCTS);
          break;
      }
    };

    return (
      <ThemeProvider theme={THEME}>
        <Nav />
        {fetchRoute()}
      </ThemeProvider>
    );
  }
}
