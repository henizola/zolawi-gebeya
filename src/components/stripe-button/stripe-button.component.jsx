import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_gwT7oJSK2Wey1H7fCVOJ44LD00K5pjIkrA';

	const onToken = token => {
		console.log(token);
		alert('Payment Succesfull');
	};

	return (
		<StripeCheckout
			lable='Pay Now'
			name='Zolawi Gebeya'
			billingAddress
			shipingAddress
			description={`your total is $ ${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
