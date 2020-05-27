import React, { useContext } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';
import { CartContainer, CartItems, Message } from './cart-dropdown.styles';
import { CartContext } from '../../providers/cart/cart.provider';

const CartDropdown = ({ history, dispatch }) => {
	const { cartItems } = useContext(CartContext);
	const { toggleHidden } = useContext(CartContext);
	return (
		<CartContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map(currentItem => (
						<CartItem key={currentItem.id} item={currentItem} />
					))
				) : (
					<Message>your cart is empty</Message>
				)}
			</CartItems>

			<CustomButton
				onClick={() => {
					history.push('/checkout');
					toggleHidden();
				}}
				style={{ marginTop: 'auto', width: '100%' }}
				Inverted={true}
			>
				GO TO CHECKOUT
			</CustomButton>
		</CartContainer>
	);
};

export default withRouter(CartDropdown);
