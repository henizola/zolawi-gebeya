import React from 'react';
import './collection-overview.styles.scss';
import {createStructuredSelector } from 'reselect'
import {connect}  from 'react-redux'
import CollectionPreview from '../../components/preview/collection-preview.component'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
const CollectionOverview=({collections})=>(
    <div className='collection-overview'>
    {collections.map(({id,...otherCollectionProps})=>(
        <CollectionPreview  key={id} {...otherCollectionProps}/>
    ))}
      
</div>
)

const mapStateToProps=createStructuredSelector(
    {
        collections:selectCollectionsForPreview
    }
)
export default connect(mapStateToProps)(CollectionOverview);