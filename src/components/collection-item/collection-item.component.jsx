import React, { useContext } from 'react';

import CustomButton from '../custom-button/custom-button.component';

import {
	CollectionItemContainer,
	Image,
	CustomButtonContainer,
	Name,
	Price,
	CollectionFooter,
} from './collection-item.styles';
import { CartContext } from '../../providers/cart/cart.provider';

const CollectionItem = ({ item }) => {
	const { name, price, imageUrl } = item;
	const { addItem } = useContext(CartContext);
	return (
		<CollectionItemContainer>
			<Image
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<CollectionFooter>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</CollectionFooter>
			<CustomButtonContainer>
				<CustomButton onClick={() => addItem(item)} inverted>
					Add to cart
				</CustomButton>
			</CustomButtonContainer>
		</CollectionItemContainer>
	);
};

export default CollectionItem;
