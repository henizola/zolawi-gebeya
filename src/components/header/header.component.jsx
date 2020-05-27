import React, { useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/1531643.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-drop-down/cart-drop-down.component';
import './header.styles.scss';
import {
	OuterContainer,
	OptionsContainer,
	OptionDiv,
	OptionLink,
	LogoContainer,
} from './header.style';
import { CartContext } from '../../providers/cart/cart.provider';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
const Header = () => {
	const currentUser = useContext(CurrentUserContext);
	const { hidden } = useContext(CartContext);
	return (
		<OuterContainer>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>SHOP</OptionLink>
				<OptionLink to='/shop'>CONTACT</OptionLink>
				{currentUser ? (
					<OptionDiv onClick={() => auth.signOut()}>
						SIGN OUT
					</OptionDiv>
				) : (
					<OptionLink to='/signin'>SIGN IN</OptionLink>
				)}

				<CartIcon />
			</OptionsContainer>
			{hidden ? <CartDropdown /> : ''}
		</OuterContainer>
	);
};

export default Header;
