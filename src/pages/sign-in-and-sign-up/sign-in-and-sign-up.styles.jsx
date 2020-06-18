import styled from 'styled-components';

export const SigninandsignupContainer = styled.div`
	width: 850px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 20px auto;
	@media screen and (max-width: 800px) {
		flex-direction: column;
		width: 100%;
	}
`;
