import React, { useContext } from 'react';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-drop-down/cart-drop-down.component';
import {
	HeaderContainer,
	OptionsContainer,
	OptionDiv,
	OptionLink,
	LogoContainer,
	Logo,
} from './header.style';
import { CartContext } from '../../providers/cart/cart.provider';
import CurrentUserContext from '../../contexts/current-user/current-user.context';
const Header = () => {
	const currentUser = useContext(CurrentUserContext);
	const { hidden } = useContext(CartContext);
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo />
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
		</HeaderContainer>
	);
};

export default Header;
