import Nav from 'components/Nav';
import { ROUTES } from 'constants/routes';
import { THEME } from 'constants/theme';
import AppContext from 'contexts/AppContext';
import NewProduct from 'pages/Product/NewProduct';
import ProductList from 'pages/Product/ProductList';
import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { ProductProps } from 'types';
import { navigate } from 'utils/navigate';

interface AppState {
  productsIdToDelete: string[];
  products: ProductProps[];
}

export default class App extends Component<{}, AppState> {
  state = {
    productsIdToDelete: [],
    products: [],
  };

  fetchRoute = () => {
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

  setProducts = (products: ProductProps[]) => {
    this.setState({ products });
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

  componentDidUpdate(_: any, prevState: AppState) {
    if (this.state.products.length !== prevState.products.length) {
      this.setState({ productsIdToDelete: [] });
    }
  }

  render() {
    const { productsIdToDelete, products } = this.state;

    return (
      <ThemeProvider theme={THEME}>
        <AppContext.Provider
          value={{
            productsIdToDelete,
            updateProductIdArr: this.updateProductIdArr,
            products,
            setProducts: this.setProducts,
          }}
        >
          <Nav />
          {this.fetchRoute()}
        </AppContext.Provider>
      </ThemeProvider>
    );
  }
}
