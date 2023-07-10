import Nav from 'components/Nav';
import { ROUTES } from 'constants/routes';
import { THEME } from 'constants/theme';
import AppContext from 'contexts/AppContext';
import NewProduct from 'pages/Product/NewProduct';
import ProductList from 'pages/Product/ProductList';
import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { navigate } from 'utils/navigate';

interface AppState {
  productsIdToDelete: string[];
}

export default class App extends Component<{}, AppState> {
  state = {
    productsIdToDelete: [],
  };

  updateProductIdArr = (add = true, sku: string) => {
    if (!add) {
      this.setState((prevState: AppState) => ({
        productsIdToDelete: prevState.productsIdToDelete.filter(
          (id) => id !== sku
        ),
      }));
    } else {
      this.setState((prevState: AppState) => ({
        productsIdToDelete: [...prevState.productsIdToDelete, sku],
      }));
    }
  };

  render() {
    const { productsIdToDelete } = this.state;

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
        <AppContext.Provider
          value={{
            productsIdToDelete,
            updateProductIdArr: this.updateProductIdArr,
          }}
        >
          <Nav />
          {fetchRoute()}
        </AppContext.Provider>
      </ThemeProvider>
    );
  }
}
