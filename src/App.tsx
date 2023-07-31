import Nav from 'components/Nav';
import { ROUTES } from 'constants/routes';
import { THEME } from 'constants/theme';
import AppContext from 'contexts/AppContext';
import NewProduct from 'pages/Product/NewProduct';
import ProductList from 'pages/Product/ProductList';
import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { APIResponse, ProductProps } from 'types';
import api from 'utils/api';
import { navigate } from 'utils/navigate';

interface AppState {
  productsIdToDelete: string[];
  products: ProductProps[];
  pathName: string;
}

export default class App extends Component<{}, AppState> {
  state = {
    productsIdToDelete: [],
    products: [],
    pathName: ROUTES.PRODUCTS as string,
  };

  fetchRoute = () => {
    switch (this.state.pathName) {
      case ROUTES.PRODUCTS:
        return <ProductList />;

      case ROUTES.NEW_PRODUCT:
        return <NewProduct />;

      default:
        navigate(ROUTES.PRODUCTS);
        break;
    }
  };

  fetchProducts = async () => {
    try {
      const data = (await api('/product/get', 'GET')) as APIResponse;
      this.setState({ products: data.data as ProductProps[] });
    } catch (error) {
      console.log(error);
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

  componentDidMount() {
    navigate(ROUTES.PRODUCTS);

    this.fetchProducts();

    document.getElementById('routeSwitch')?.addEventListener('click', () => {
      this.setState({ pathName: window.location.pathname });
    });
  }

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
          <button id="routeSwitch" style={{ display: 'none' }}></button>

          <Nav />
          {this.fetchRoute()}
        </AppContext.Provider>
      </ThemeProvider>
    );
  }
}
