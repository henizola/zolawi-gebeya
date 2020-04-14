import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.comopnent'

function App() {
  return (
      <Switch>
          <Route exact={true}  path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage}/>
      </Switch> 
  );
}

export default App;
