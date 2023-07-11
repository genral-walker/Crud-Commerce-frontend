import { Component } from 'react';
import { NewProductWrapper } from './styles';
import { navigate } from 'utils/navigate';
import { ROUTES } from 'constants/routes';

interface NewProductState {
  switcherType: 'dvd' | 'book' | 'furniture';
}
export default class NewProduct extends Component {
  state: NewProductState = {
    switcherType: 'dvd',
  };

  render() {
    const { switcherType } = this.state;

    return (
      <NewProductWrapper>
        <h2>Product Add</h2>
        <form onSubmit={(evt) => evt.preventDefault()} id="product_form">
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
            <button>Save</button>
            <button type="button" onClick={() => navigate(ROUTES.PRODUCTS)}>
              Cancel
            </button>
          </div>
        </form>
      </NewProductWrapper>
    );
  }
}
