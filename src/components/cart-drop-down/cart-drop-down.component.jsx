import React from 'react';
import './cart-dero-down.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'
import {connect } from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selecter'
const CartDropdown=({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.map(currentItem=><CartItem key={currentItem.id} item={currentItem}/>)
        }
        </div>
        
        <CustomButton style={{marginTop: 'auto', width:'100%', }}>GO TO CHECKOUT</CustomButton>

    </div>
);


const mapStateToProps=(state)=>({
    cartItems:selectCartItems(state)
})

export default connect (mapStateToProps)(CartDropdown);