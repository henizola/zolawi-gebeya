import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

export const LogoContainer = styled(Link)``;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
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

export const OuterContainer = styled.div`
	display: flex;
	height: 70px;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 25px;
`;
