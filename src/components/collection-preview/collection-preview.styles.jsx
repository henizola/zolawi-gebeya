import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

export const Title = styled(Link)`
	font-size: 28px;
	margin-bottom: 25px;
`;

export const SamplesContainer = styled.div``;

export const Preview = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 800px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 10px;
		margin-left: 40px;
	}
`;
