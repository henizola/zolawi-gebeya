import { createContext, useEffect, useState } from 'react';
import SHOP_DATA from './shop.data';
export const CollectionContext = createContext({
	collections: null,
});
const [collections, setCollections] = useState(null);

useEffect(() => {
	setCollections(SHOP_DATA =>
		Object.keys(collections).map(key => collections[key])
	);
}, []);
