import React from 'react';
import {ReactComponent as Logo } from '../../assets/1531643.svg'
import {auth} from '../../firebase/firebase.utils';
import {connect }  from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-drop-down/cart-drop-down.component';
import {selectCartHidden} from '../../redux/cart/cart.selecter';
import {selectCurrentUser} from '../../redux/user/user.selector'
import {createStructuredSelector} from 'reselect'
import './header.styles.scss'
import {    OuterContainer,
            OptionsContainer ,
            OptionDiv,
            OptionLink,
            LogoContainer} from './header.style';
const Header = ( {currentUser,hidden}) =>(
    <OuterContainer>
       <LogoContainer to='/'>
             <Logo className='logo'/>
       </LogoContainer>
       <OptionsContainer>
            <OptionLink to='/shop' >
                    SHOP
            </OptionLink>
            <OptionLink to='/shop' >
                CONTACT
            </OptionLink>
            {currentUser ?
            <OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv>
            :
            <OptionLink to='/signin'>SIGN IN</OptionLink>   
        }
        <CartIcon />
       </OptionsContainer>
        {hidden?<CartDropdown/>:''} 
    </OuterContainer>
        
        
);

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser , //here the state is the root reducer and user is the usere reducer that is found in the user.reducer.js and currentUser is found in that object which initialli is null
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);//now we recive the value of current user directlly from the user
//  reducer to this component no need or state drilling so new we can remove passing the state (current user) to this comopnent from the parent