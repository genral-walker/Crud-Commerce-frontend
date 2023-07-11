import { Component } from 'react';
import { ProductListWrapper } from './styles';
import { ROUTES } from 'constants/routes';
import { navigate } from 'utils/navigate';
import Product from 'components/Product';
import AppContext from 'contexts/AppContext';
import { AppContextType } from 'types';

export default class ProductList extends Component {
  static contextType = AppContext;

  deleteProducts = () => {};

  render() {
    const { productsIdToDelete, products } = this.context as AppContextType;
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
