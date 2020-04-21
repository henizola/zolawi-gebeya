import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/1531643.svg'
import './header.styles.scss'
import {auth} from '../../firebase/firebase.utils';
import {connect }  from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-drop-down/cart-drop-down.component';
const Header = ( {currentUser,hidden}) =>(
    <div className='outer-container'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options-container'>
            <Link to='/shop' className='option'>
                    SHOP
            </Link>
            <Link to='/shop' className='option'>
                CONTACT
            </Link>
            {currentUser ?
            <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
            :
            <Link to='/signin' className='option'>SIGN IN</Link>   
        }
        <CartIcon />
        </div>
        {hidden?<CartDropdown/>:''} 
           </div>
);

const mapStateToProps = ({user:{currentUser},cart:{hidden}})=> ({
    currentUser , //here the state is the root reducer and user is the usere reducer
    // that is found in the user.reducer.js and currentUser is found in that object which initialli is null
    hidden
})

export default connect(mapStateToProps)(Header);//now we recive the value of current user directlly from the user
//  reducer to this component no need or state drilling so new we can remove passing the state (current user) to this comopnent from the parent