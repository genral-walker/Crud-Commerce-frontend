import { Component } from 'react';
import { ProductListWrapper } from './styles';
import { ROUTES } from 'constants/routes';
import { navigate } from 'utils/navigate';
import Product from 'components/Product';
import { ProductProps } from 'types';
import AppContext from 'contexts/AppContext';

export default class ProductList extends Component {
  static contextType = AppContext;

  deleteProducts = () => {};

  render() {
    const { productsIdToDelete } = this.context as any;
    return (
      <ProductListWrapper>
        <div>
          <h2>Product List</h2>

          <div>
            <button onClick={() => navigate(ROUTES.NEW_PRODUCT)}>ADD</button>
            <button
              disabled={!productsIdToDelete.length}
              onClick={this.deleteProducts}
            >
              MASS DELETE
            </button>
          </div>
        </div>

        <main>
          {products.map((prd) => (
            <Product key={prd.sku} {...prd} />
          ))}
        </main>
      </ProductListWrapper>
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
