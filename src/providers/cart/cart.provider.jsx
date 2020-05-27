import React, { useEffect, useState, createContext } from 'react';

import { addItemToCart, removeItemFromCart } from './cart.utils';

export const CartContext = createContext({
	hidden: false,
	toggleHidden: () => {},
	cartItems: [],
	addItem: () => {},
	removeItem: () => {},
	clearItemFromCart: () => {},
	cartItemsCount: 0,
	total: 0,
});

const CartProvider = ({ children }) => {
	const [hidden, setHidden] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartItemsCount, setCartItemsCount] = useState(0);
	const [total, setTotal] = useState(0);
	const addItem = item => setCartItems(addItemToCart(cartItems, item));
	const toggleHidden = () => setHidden(!hidden);
	const removeItem = item =>
		setCartItems(removeItemFromCart(cartItems, item));
	const clearItemFromCart = item =>
		setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));

	useEffect(() => {
		setCartItemsCount(
			cartItems.reduce(
				(accumilatedQuantity, cartItem) =>
					accumilatedQuantity + cartItem.quantity,
				0
			)
		);
		setTotal(
			cartItems.reduce(
				(accumilatedTotal, cartItem) =>
					accumilatedTotal + cartItem.quantity * cartItem.price,
				0
			)
		);
	}, [cartItems]);

	return (
		<CartContext.Provider
			value={{
				hidden,
				toggleHidden,
				addItem,
				cartItems,
				cartItemsCount,
				removeItem,
				clearItemFromCart,
				total,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
export default CartProvider;
