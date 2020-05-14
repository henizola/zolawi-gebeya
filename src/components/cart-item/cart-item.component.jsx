import React from 'react';


import { CartItemContainer, ItemDetails, Name,Img } from './cart-item.styles';


const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <Img src={imageUrl} alt='item' />
    <ItemDetails>
      <Name>{name}</Name>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
