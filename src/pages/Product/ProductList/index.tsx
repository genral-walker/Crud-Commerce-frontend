import { Component } from 'react';
import { ProductListWrapper } from './styles';
import { ROUTES } from 'constants/routes';
import { navigate } from 'utils/navigate';
import Product from 'components/Product';
import AppContext from 'contexts/AppContext';
import { APIResponse, AppContextType } from 'types';
import api from 'utils/api';

interface ProductListState {
  deleteLoading: boolean;
}

export default class ProductList extends Component {
  static contextType = AppContext;

  state: ProductListState = {
    deleteLoading: false,
  };

  fetchProducts = async () => {
    try {
      const data = (await api('/product/get', 'GET')) as APIResponse;
      const { setProducts } = this.context as AppContextType;
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteProducts = async () => {
    const { productsIdToDelete, products, setProducts } = this
      .context as AppContextType;

    try {
      this.setState({ deleteLoading: true });
      await api('/product/delete', 'DELETE', productsIdToDelete);
      setProducts(
        products.filter((product) => !productsIdToDelete.includes(product.sku))
      );
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ deleteLoading: false });
    }
  };

  componentDidMount(): void {
    this.fetchProducts();
  }

  render() {
    const { productsIdToDelete, products } = this.context as AppContextType;
    return (
      <ProductListWrapper deleteLoading={this.state.deleteLoading}>
        <div>
          <h2>Product List</h2>
          <div>
            <button onClick={() => navigate(ROUTES.NEW_PRODUCT)}>ADD</button>
            <button
              disabled={!productsIdToDelete.length || this.state.deleteLoading}
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
