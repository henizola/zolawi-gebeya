import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'
import {connect } from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selecter'
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.action';

import {CartContainer,
        CartItems,
        Message} from './cart-dropdown.styles'



const CartDropdown=({cartItems,history,dispatch})=>(
    < CartContainer>
        <CartItems>
        {
            cartItems.length?  cartItems.map(currentItem=><CartItem key={currentItem.id} item={currentItem}/>)
            :<Message >your cart is empty</Message>
          
        }
        </CartItems>
        
        <CustomButton onClick={
            ()=>{history.push('/checkout');
            dispatch(toggleCartHidden());
                        }} 
    style={{marginTop: 'auto', width:'100%', }}>GO TO CHECKOUT</CustomButton>

    </CartContainer>
);

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect (mapStateToProps)(CartDropdown));