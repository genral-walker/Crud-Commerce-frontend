export interface ProductProps {
  sku: string;
  name: string;
  price: number;
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
}
