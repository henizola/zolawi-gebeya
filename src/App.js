import React from 'react';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.comopnent'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.components'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action'
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';
class App extends React.Component {

unsubscribeFromAuth=null;
componentDidMount(){

  const {setCurrentUser}=this.props;//we get this setCurrentUser function thst is foun i the user.action.js and we get it from the root reducer 

  this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
      const userReaf= await createUserProfileDocument(userAuth);

      userReaf.onSnapshot(snapShot=>{
        setCurrentUser({//passing an object to the function which is found in the useer.action.js state
          id:snapShot.id,
          ...snapShot.data()
    });
      });
     
    }
    else{
      setCurrentUser(userAuth)
    }})
 
}
// componentWillUnmount(){
//   this.unsubscribeFromAuth();
// }
  render(){
    return (
    <div>
      <Header/>
      <Switch>
          <Route exact={true}  path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={()=>this.props.currentUser? (<Redirect to='/'/>):(<SignInAndSignUpPage/>)}/>
      </Switch> 
    </div>
    
  );
  }

  
}

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});
const mapStateToProps=createStructuredSelector({
  currentUser: selectCurrentUser
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
