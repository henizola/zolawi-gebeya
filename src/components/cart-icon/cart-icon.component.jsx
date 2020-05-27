import React, { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../providers/cart/cart.provider';
import {
	CartIconContainer,
	ShopingIconContainer,
	ItemCount,
} from './cart-icon.styles';

const CartIcon = () => {
	const { toggleHidden } = useContext(CartContext);
	const { cartItemsCount } = useContext(CartContext);
	return (
		<CartIconContainer onClick={toggleHidden}>
			<ShopingIconContainer>
				<ShoppingIcon />
			</ShopingIconContainer>

			<ItemCount>{cartItemsCount}</ItemCount>
		</CartIconContainer>
	);
};
export default CartIcon;
