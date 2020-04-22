import React from 'react';
import './cart-dero-down.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'
import {connect } from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selecter'
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.action';
const CartDropdown=({cartItems,history,dispatch})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length?  cartItems.map(currentItem=><CartItem key={currentItem.id} item={currentItem}/>)
            :<span className='message'>your cart is empty</span>
          
        }
        </div>
        
        <CustomButton onClick={
            ()=>{history.push('/checkout');
            dispatch(toggleCartHidden());
                        }} 
    style={{marginTop: 'auto', width:'100%', }}>GO TO CHECKOUT</CustomButton>

    </div>
);

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})

export default withRouter(connect (mapStateToProps)(CartDropdown));