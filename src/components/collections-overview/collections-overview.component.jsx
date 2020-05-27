import React, { useContext } from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewContainer } from './collections-overview.styles';
import { CollectionContext } from '../../providers/collections/collections.context';

const CollectionsOverview = () => {
	const { collections } = useContext(CollectionContext);
	return (
		<CollectionsOverviewContainer>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</CollectionsOverviewContainer>
	);
};

export default CollectionsOverview;
