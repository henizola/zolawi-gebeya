import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {
	CollectionPreviewContainer,
	Preview,
	Title,
	SamplesContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }, props) => (
	<CollectionPreviewContainer>
		<Title to={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Title>
		<SamplesContainer>
			<Preview>
				{items
					.filter((item, idx) => idx < 4)
					.map(item => (
						<CollectionItem key={item.id} item={item} />
					))}
			</Preview>
		</SamplesContainer>
	</CollectionPreviewContainer>
);

export default CollectionPreview;
