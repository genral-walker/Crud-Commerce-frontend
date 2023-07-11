import { createContext } from 'react';
import { AppContextType } from 'types';

const AppContext = createContext({
  productsIdToDelete: [],
  updateProductIdArr: () => {},
  products: [],
} as AppContextType);

export default AppContext;
