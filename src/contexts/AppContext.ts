import { createContext } from 'react';
import { AppContextType } from 'types';

const AppContext = createContext({
  productsIdToDelete: [],
  updateProductIdArr: () => {},
} as AppContextType);

export default AppContext;
