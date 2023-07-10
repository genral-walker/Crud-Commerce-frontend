import { Component } from 'react';
import { ProductListWrapper } from './styles';
import { ROUTES } from 'constants/routes';
import { navigate } from 'utils/navigate';

interface ProductListState {
  productsIdToDelete: string[];
}
export default class ProductList extends Component<{}, ProductListState> {
  state = {
    productsIdToDelete: [],
  };

  deleteProducts = () => {};

  render() {
    const { productsIdToDelete } = this.state;
    return (
      <ProductListWrapper>
        <div>
          <h2>Product List</h2>
          <button onClick={() => navigate(ROUTES.NEW_PRODUCT)}>ADD</button>
          <button
            disabled={!productsIdToDelete.length}
            onClick={this.deleteProducts}
          >
            MASS DELETE
          </button>
        </div>
      </ProductListWrapper>
    );
  }
}
