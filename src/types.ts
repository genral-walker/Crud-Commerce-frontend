export interface ProductProps {
  sku: string;
  name: string;
  price: string | number;
  productType: 'dvd' | 'book' | 'furniture';
  size: number | null;
  height: number | null;
  width: number | null;
  length: number | null;
  weight: number | null;
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
