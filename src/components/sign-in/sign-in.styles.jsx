import styled from 'styled-components';

export const SignInContainer = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;
	margin-left: -70px;
	@media screen and (max-width: 800px) {
		width: 95vw;
		margin-left: 0px;
	}
`;
export const Title = styled.div`
	border: 5px solid black;
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
`;
