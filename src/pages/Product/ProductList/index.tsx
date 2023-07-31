import { Component } from 'react';
import { ProductListWrapper } from './styles';
import { ROUTES } from 'constants/routes';
import { navigate } from 'utils/navigate';
import Product from 'components/Product';
import AppContext from 'contexts/AppContext';
import { AppContextType } from 'types';
import api from 'utils/api';

interface ProductListState {
  deleteLoading: boolean;
}

export default class ProductList extends Component {
  static contextType = AppContext;

  state: ProductListState = {
    deleteLoading: false,
  };

  deleteProducts = async () => {
    const { productsIdToDelete, products, setProducts } = this
      .context as AppContextType;

    if (productsIdToDelete.length && !this.state.deleteLoading) {
      try {
        this.setState({ deleteLoading: true });
        await api('/product/delete', 'DELETE', productsIdToDelete);
        setProducts(
          products.filter(
            (product) => !productsIdToDelete.includes(product.sku)
          )
        );
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ deleteLoading: false });
      }
    }
  };

  render() {
    const { products } = this.context as AppContextType;
    return (
      <ProductListWrapper>
        <div>
          <h2>Product List</h2>
          <div>
            <button onClick={() => navigate(ROUTES.NEW_PRODUCT)}>ADD</button>
            <button onClick={this.deleteProducts}>MASS DELETE</button>
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
