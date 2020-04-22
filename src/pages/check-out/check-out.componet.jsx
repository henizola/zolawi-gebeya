import React from 'react'
import './check-out.styles.scss'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartItemsTotal} from '../../redux/cart/cart.selecter';
import CheckOutItem from '../../components/checkout-item/checkout-item.component'

const CheckOut =({cartItems,Total})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
                <div className='header-blocks'><span>Product</span></div>
                <div className='header-blocks'><span>Descreption</span></div>
                <div className='header-blocks'> <span>Quantity</span></div>
                <div className='header-blocks'><span>Price</span></div>
                <div className='header-blocks'><span>Remove</span></div>
         </div>
            {
                cartItems.map(cartItem=><CheckOutItem key={cartItem.id} cartItem={cartItem}/>)
            }

            <span className='total'>Total:${Total}</span>

        </div>

);
const mapStateToProps=createStructuredSelector(
    {cartItems:selectCartItems,
     Total:selectCartItemsTotal
    }
)
export default connect (mapStateToProps) (CheckOut);