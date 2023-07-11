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
    products,
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
    const { productsIdToDelete, products } = this.state;

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
            products,
          }}
        >
          <Nav />
          {fetchRoute()}
        </AppContext.Provider>
      </ThemeProvider>
    );
  }
}

const products: ProductProps[] = [
  {
    sku: 'DVD001',
    name: 'The Matrix',
    price: 10,
    productType: 'dvd',
    size: 1,
    height: 0,
    width: 0,
    length: 0,
    weight: 0.2,
  },
  {
    sku: 'BOOK001',
    name: 'To Kill a Mockingbird',
    price: 15,
    productType: 'book',
    size: 1,
    height: 8,
    width: 5,
    length: 0.5,
    weight: 0.8,
  },
  {
    sku: 'FURN001',
    name: 'Sofa',
    price: 500,
    productType: 'furniture',
    size: 3,
    height: 36,
    width: 84,
    length: 36,
    weight: 50,
  },
  {
    sku: 'DVD002',
    name: 'Inception',
    price: 12,
    productType: 'dvd',
    size: 1,
    height: 0,
    width: 0,
    length: 0,
    weight: 0.2,
  },
  {
    sku: 'BOOK002',
    name: '1984',
    price: 20,
    productType: 'book',
    size: 1,
    height: 9,
    width: 6,
    length: 1,
    weight: 0.7,
  },
  {
    sku: 'FURN002',
    name: 'Coffee Table',
    price: 200,
    productType: 'furniture',
    size: 2,
    height: 18,
    width: 36,
    length: 36,
    weight: 30,
  },
  {
    sku: 'DVD003',
    name: 'Pulp Fiction',
    price: 8,
    productType: 'dvd',
    size: 1,
    height: 0,
    width: 0,
    length: 0,
    weight: 0.2,
  },
  {
    sku: 'BOOK003',
    name: 'The Great Gatsby',
    price: 18,
    productType: 'book',
    size: 1,
    height: 8.5,
    width: 5.5,
    length: 1.5,
    weight: 0.9,
  },
  {
    sku: 'FURN003',
    name: 'Dining Table',
    price: 800,
    productType: 'furniture',
    size: 4,
    height: 30,
    width: 72,
    length: 36,
    weight: 80,
  },
  {
    sku: 'DVD004',
    name: 'The Shawshank Redemption',
    price: 10,
    productType: 'dvd',
    size: 1,
    height: 0,
    width: 0,
    length: 0,
    weight: 0.2,
  },
  {
    sku: 'BOOK004',
    name: "Harry Potter and the Sorcerer's Stone",
    price: 25,
    productType: 'book',
    size: 1,
    height: 9,
    width: 6,
    length: 1.5,
    weight: 1.2,
  },
  {
    sku: 'FURN004',
    name: 'Bed',
    price: 1000,
    productType: 'furniture',
    size: 5,
    height: 60,
    width: 80,
    length: 80,
    weight: 100,
  },
];
