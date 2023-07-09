import { ROUTES } from 'constants/routes';
import { THEME } from 'constants/theme';
import NewProduct from 'pages/Product/NewProduct';
import ProductList from 'pages/Product/ProductList';
import { Component } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={THEME}>
        <Routes>
          <Route path={ROUTES.PRODUCTS} Component={ProductList} />
          <Route path={ROUTES.NEW_PRODUCT} Component={NewProduct} />
          <Route path={'*'} element={<Navigate to={ROUTES.PRODUCTS} />} />
        </Routes>
      </ThemeProvider>
    );
  }
}
