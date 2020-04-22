import React from 'react';
import './checkout-item.styles.scss';
import {removeItem} from '../../redux/cart/cart.action';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action'
import {subtructItem} from '../../redux/cart/cart.action'
const CheckOutItem=({cartItem, removeItem,addItem,subtructItem})=>{return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={cartItem.imageUrl}/>
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='quantity'>
            <div className='arrow'onClick={()=>subtructItem(cartItem)}>&#10094;</div>
            {cartItem.quantity}
            <div className='arrow'onClick={()=>addItem(cartItem)}>&#10095;</div>
            </span>
        <span className='price'>{cartItem.price}</span>
        <div onClick={()=>removeItem(cartItem)}className='remove-button'>&#10005;</div>
    </div>
)}

const mapDispatchToProps=dispatch=>({
    removeItem:(item)=>dispatch(removeItem(item)),
    addItem: (item)=>dispatch(addItem(item)),
    subtructItem:(item)=>dispatch(subtructItem(item))
})
export default connect (null,mapDispatchToProps)(CheckOutItem);
    
