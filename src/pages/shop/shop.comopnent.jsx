import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component'; 
const Shop=({match})=>{
    
    console.log(match);
    
    return <div className='shop-page'>
         <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route  path={`${match.path}/:collectionId`} component={CollectionPage}/>
        {/* <CatagoryPage match={match.path}/> */}
     </div>
 
}
 



export default Shop;