import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
	&:hover {
		opacity: 0.8;
	}
	button {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 155px;
		&:hover {
			opacity: 0.85;
			display: flex;
		}
	}
`;
export const Image = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	@media screen and (max-width: 800px) {
		width: 40vw;
		margin-left: 30px;
	}
`;

export const CustomButtonContainer = styled.div``;

export const CollectionFooter = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;
export const Name = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

export const Price = styled.span`
	width: 10%;
`;
