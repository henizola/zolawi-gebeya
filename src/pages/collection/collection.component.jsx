import React, { useContext } from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { CollectionPageContainer, Items, Title } from './collection.styles';
import ColectionsContext from '../../contexts/collections-context/collections.context';
const CollectionPage = ({ match }) => {
	const collections = useContext(ColectionsContext);
	const collection = collections[match.params.collectionId];
	const { title, items } = collection;
	return (
		<CollectionPageContainer>
			<Title>{title} </Title>
			<Items>
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</Items>
		</CollectionPageContainer>
	);
};

export default CollectionPage;
