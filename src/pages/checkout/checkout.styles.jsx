import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
	width: 55%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;
	@media screen and (max-width: 800px) {
		width: 90%;
	}
`;
export const CheckoutHeader = styled.div`
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
`;
export const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 23%;

	&:last-child {
		width: 8%;
	}
`;
export const Button = styled.button`
	margin-left: auto;
	margin-top: 50px;
`;
export const Total = styled.div`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;
`;
export const TestWarning = styled.div`
	text-align: center;
	color: red;
	margin-top: 40px;
	font-size: 24px;
`;
