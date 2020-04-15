import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.comopnent'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.components'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
class App extends React.Component {
constructor(){
  super();
  this.state={
    currentUser:null
  }

  

}
unsubscribeFromAuth=null;
componentDidMount(){
  this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
    // this.setState({currentUser:user});
    if(userAuth){
      const userReaf= await createUserProfileDocument(userAuth);

      userReaf.onSnapshot(snapShot=>{
        // console.log(snapShot.data());
        this.setState({currentUser:
          {
              id:snapShot.id,
              ...snapShot.data()
        }},()=>{console.log(this.state)})
         
      })
     
    }
    else{
      this.setState({currentUser:userAuth})
    }
    // createUserProfileDocument(user);
 
    
  })
 
}
// componentWillUnmount(){
//   this.unsubscribeFromAuth();
// }
  render(){
    return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
          <Route exact={true}  path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
      </Switch> 
    </div>
    
  );
  }

  
}

export default App;
