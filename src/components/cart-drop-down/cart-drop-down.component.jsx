import React from 'react';
import './cart-dero-down.styles.scss';
import CustomButton from '../custom-button/custom-button.component';


const CartDropdown=()=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>

        </div>
        <CustomButton style={{marginTop: 'auto', width:'100%', }}>GO TO CHECKOUT</CustomButton>

    </div>
);



export default CartDropdown;