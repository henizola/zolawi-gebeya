import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

import { ReactComponent as Logos } from '../../assets/1531643.svg';

export const HeaderContainer = styled.div`
	display: flex;
	height: 70px;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 25px;
`;
export const LogoContainer = styled(Link)``;

export const Logo = styled(Logos)`
	height: 70px;
	width: 70px;
	@media screen and (max-width: 800px) {
		height: 40px;
		width: 40px;
	}
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	@media screen and (max-width: 800px) {
		width: 90%;
	}
`;

export const OptionContainerStyles = css`
	padding: 10px 15px;
	cursor: pointer;
`;
export const OptionLink = styled(Link)`
	${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
	${OptionContainerStyles}
`;
