import React, { lazy, Suspense } from 'react';
import Spinner from '../../components/spinner/spinner.compoennt';
import { Route } from 'react-router-dom';

const CollectionsOverview = lazy(() =>
	import(
		'../../components/collections-overview/collections-overview.component'
	)
);
const CollectionPage = lazy(() => import('../collection/collection.component'));
const Shop = ({ match }) => {
	console.log(match);

	return (
		<div className='shop-page'>
			<Suspense fallback={<Spinner />}>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverview}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPage}
				/>
			</Suspense>
		</div>
	);
};

export default Shop;
