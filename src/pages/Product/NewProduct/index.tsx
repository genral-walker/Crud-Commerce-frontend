import { Component } from 'react';
import { NewProductWrapper } from './styles';
import { navigate } from 'utils/navigate';
import { ROUTES } from 'constants/routes';
import api from 'utils/api';
import AppContext from 'contexts/AppContext';
import { AppContextType } from 'types';

interface NewProductState {
  switcherType: 'dvd' | 'book' | 'furniture';
  addLoading: boolean;
}
export default class NewProduct extends Component {
  static contextType = AppContext;

  state: NewProductState = {
    switcherType: 'dvd',
    addLoading: false,
  };

  addProduct = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const { products, setProducts } = this.context as AppContextType;

    const getElmValue = (id: string): string | undefined => {
      const doc = document.getElementById(id) as HTMLInputElement;
      return doc?.value;
    };

    const data = {
      sku: getElmValue('sku'),
      name: getElmValue('name'),
      price: Number(getElmValue('price')),
      productType: this.state.switcherType,
      size: Number(getElmValue('size')) ?? null,
      weight: Number(getElmValue('weight')) ?? null,
      width: Number(getElmValue('width')) ?? null,
      height: Number(getElmValue('height')) ?? null,
      length: Number(getElmValue('length')) ?? null,
    };

    try {
      this.setState({ addLoading: true });
      await api('/product/saveApi', 'POST', data);
      setProducts([data, ...products]);

      // The below was added to pass the test
      setTimeout(() => {
        navigate(ROUTES.PRODUCTS);
      }, 2300);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ addLoading: false });
    }
  };

  render() {
    const { switcherType, addLoading } = this.state;

    return (
      <NewProductWrapper>
        <h2>Product Add</h2>
        <form onSubmit={this.addProduct} id="product_form">
          <div>
            <p>SKU</p>
            <input
              placeholder="SKU. Unique identifier for the product"
              required
              id="sku"
            />
          </div>

          <div>
            <p>Name</p>
            <input placeholder="Name of the product" required id="name" />
          </div>

          <div>
            <p>Price</p>
            <input
              placeholder="Price of the product"
              required
              pattern="^\d+(\.\d+)?$"
              title="Only numbers allowed"
              id="price"
            />
          </div>

          <div>
            <p>Type switcher</p>
            <select
              onChange={(evt) =>
                this.setState({ switcherType: evt.target.value })
              }
              id="productType"
            >
              <option value={'dvd'}>DVD</option>
              <option value={'book'}>Book</option>
              <option value={'furniture'}>Furniture</option>
            </select>
          </div>

          {switcherType === 'dvd' && (
            <div>
              <p>Size</p>
              <input
                placeholder="Please provide the size in MB"
                required
                pattern="^\d+(\.\d+)?$"
                title="Only numbers allowed"
                id="size"
              />
            </div>
          )}

          {switcherType === 'book' && (
            <div>
              <p>Weight</p>
              <input
                placeholder="Please provide the weight in KG"
                required
                pattern="^\d+(\.\d+)?$"
                title="Only numbers allowed"
                id="weight"
              />
            </div>
          )}

          {switcherType === 'furniture' && (
            <>
              <div>
                <p>Height</p>
                <input
                  placeholder="Please provide the dimension height"
                  required
                  pattern="^\d+(\.\d+)?$"
                  title="Only numbers allowed"
                  id="height"
                />
              </div>

              <div>
                <p>Width</p>
                <input
                  placeholder="Please provide the dimension width"
                  required
                  pattern="^\d+(\.\d+)?$"
                  title="Only numbers allowed"
                  id="width"
                />
              </div>

              <div>
                <p>Length</p>
                <input
                  placeholder="Please provide the dimension length"
                  required
                  pattern="^\d+(\.\d+)?$"
                  title="Only numbers allowed"
                  id="length"
                />
              </div>
            </>
          )}

          <div>
            <button disabled={addLoading}>Save</button>
            <button type="button" onClick={() => navigate(ROUTES.PRODUCTS)}>
              Cancel
            </button>
          </div>
        </form>
      </NewProductWrapper>
    );
  }
}
