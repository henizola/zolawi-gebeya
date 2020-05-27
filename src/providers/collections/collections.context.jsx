import { createContext } from 'react';
import SHOP_DATA from './shop.data';
export const CollectionContext = createContext({
	collections: Object.keys(SHOP_DATA).map(key => SHOP_DATA[key]),
});
