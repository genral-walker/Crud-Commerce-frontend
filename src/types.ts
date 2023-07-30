export interface ProductProps {
  sku: string;
  name: string;
  price: string;
  productType: 'dvd' | 'book' | 'furniture';
  size: number;
  height: number;
  width: number;
  length: number;
  weight: number;
}

export interface AppContextType {
  productsIdToDelete: string[];
  updateProductIdArr: (add: boolean, sku: string) => void;
  products: ProductProps[];
  setProducts: Function;
}

export interface APIResponse {
  status: number;
  message: string;
  data?: ProductProps[] | ProductProps;
}
