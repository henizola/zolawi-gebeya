import React, { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
	CheckoutPageContainer,
	HeaderBlock,
	CheckoutHeader,
	Total,
	TestWarning,
} from './checkout.styles';
import { CartContext } from '../../providers/cart/cart.provider';

const CheckoutPage = () => {
	const { cartItems } = useContext(CartContext);
	const { total } = useContext(CartContext);
	return (
		<CheckoutPageContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map(cartItem => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<Total>TOTAL: ${total}</Total>
			<TestWarning>
				*please user the following test payment craditcard for payments
				<br />
				4242 4242 4242 4242 -expire 1/21 CVV 123
			</TestWarning>

			<StripeCheckoutButton price={total} />
		</CheckoutPageContainer>
	);
};

export default CheckoutPage;
