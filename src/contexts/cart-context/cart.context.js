import { createContext } from 'react';

const CartContext = createContext({
	hidden: false,
	toggleHidden: () => {},
});

export default CartContext;
