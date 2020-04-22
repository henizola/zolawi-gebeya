import React from 'react';
import './cart-item.styles.scss';

const CartItem=({item:{imageUrl,name,price,quantity}})=>{
 
    return(
    <div className='cart-item '>
        <img className='image' src={imageUrl} alt='item'/>
        <div className='item-details'> 
        <span className='name '>{name}</span>
        <span >{quantity} X ${price}</span>
      
        </div>
    </div>
    )
 
 

};



export default CartItem;