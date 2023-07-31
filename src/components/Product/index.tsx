import { Component } from 'react';
import { ProductWrapper } from './styles';
import { AppContextType, ProductProps } from 'types';
import AppContext from 'contexts/AppContext';

export default class Product extends Component<ProductProps> {
  static contextType = AppContext;

  render() {
    const { updateProductIdArr } = this.context as AppContextType;

    const {
      height,
      length,
      productType,
      size,
      weight,
      width,
      name,
      price,
      sku,
    } = this.props;

    return (
      <ProductWrapper>
        {sku && (
          <input
            type="checkbox"
            className="delete-checkbox"
            onChange={({ target: { checked } }) =>
              updateProductIdArr(checked, sku)
            }
          />
        )}

        <h3>
          <span>SKU</span> <span>{sku}</span>
        </h3>

        <h3>
          <span>Name</span> <span>{name}</span>
        </h3>

        <p>
          <span>Price</span> <span>{price} $</span>
        </p>

        {productType === 'dvd' && (
          <p>
            <span>Size</span> <span>{size} MB</span>
          </p>
        )}

        {productType === 'book' && (
          <p>
            <span>Weight</span> <span>{weight} KG</span>
          </p>
        )}

        {productType === 'furniture' && (
          <p>
            <span>Dimension</span>
            <span>
              {height} x {width} x {length}
            </span>
          </p>
        )}
      </ProductWrapper>
    );
  }
}
