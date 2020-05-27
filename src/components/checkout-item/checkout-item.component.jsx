import React, { useContext } from 'react';

import {
	CheckoutItemContainer,
	ImageContainer,
	Image,
	Name,
	Quantity,
	Value,
	Arrow,
	Price,
	RemoveButton,
} from './checkout-item.styles';
import { CartContext } from '../../providers/cart/cart.provider';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { addItem } = useContext(CartContext);
	const { removeItem } = useContext(CartContext);
	const { clearItemFromCart } = useContext(CartContext);
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<Image src={imageUrl} alt='item' />
			</ImageContainer>
			<Name>{name}</Name>
			<Quantity>
				<Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>

				<Value>{quantity}</Value>
				<Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
			</Quantity>
			<Price>{price}</Price>
			<RemoveButton onClick={() => clearItemFromCart(cartItem)}>
				&#10005;
			</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
