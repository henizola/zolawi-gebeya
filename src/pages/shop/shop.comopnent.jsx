import React from 'react';
import SECTION_DATA from './shop.data'
import CollectionPage from '../../components/preview/collection-preview.component'
class Shop extends React.Component{

        constructor(){
            super();
            this.state={
                collections:SECTION_DATA,

            }
        }
render(){
    const  {collections}=this.state;
     return(
        <div>
            {collections.map(({id,...otherCollectionProps})=>(
                <CollectionPage key={id} {...otherCollectionProps}/>
            ))}
              
        </div>
    );
}
   
}
export default Shop;