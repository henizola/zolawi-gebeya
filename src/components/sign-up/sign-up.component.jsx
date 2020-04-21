import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form/form.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends React.Component{

    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
    }
}

handleSubmit =async event=>{
    event.preventDefault();//hujacs the default submit form the method

    const {displayName,email,password,confirmPassword}=this.state; 
    console.log('from the handle submit')
    if(password!==confirmPassword){//this chekcs the password and the confirm password are the same
        alert('password dont match');
        return; 
    }
    try{    

        const {user}=await auth.createUserWithEmailAndPassword(email,password);//asigns the email and passsword to the user 
     await   createUserProfileDocument(user,{displayName});//this stores it in the firestore using the firebase .utils
        this.setState({ //and sets the state to default to clear our input field
            displayName:'',
             email:'',
            password:'',
            confirmPassword:''})
    }catch(error){
console.log('unable to create user using the provided email and password',error.message)
    }

}

handleChange=(event)=>{
    const {name,value}=event.target;
    this.setState({[name]:value})//sets the state form the input and asigns it dinamicaly using the [] this makes our sign in form editable
}

render(){
  
     return(
        <div className='sign-up'>
            <h2  className='title'>I dint have an account</h2>
            <span>Sign-up with your email and password</span>
            <form className='sign-up-form'>
                <FormInput type='text' 
                name='displayName' 
                value={this.state.displayName} 
                onChange={this.handleChange} 
                lable='Display Name' 
                requierd/> 
                <FormInput type='email' 
                name='email' 
                value={this.state.email} 
                onChange={this.handleChange} 
                lable='EMAIL' 
                requierd/> 
                <FormInput type='password' 
                name='password' 
                value={this.state.password} 
                onChange={this.handleChange} 
                lable='PASSWORD' 
                requierd/> 
                <FormInput type='password' 
                name='confirmPassword' 
                value={this.state.confirmPassword} 
                onChange={this.handleChange} 
                lable='CONFIRM PASSWORD' 
                requierd/> 

                <CustomButton type='submit' onClick={this.handleSubmit}>SignUp</CustomButton>

            </form>

        </div>
    );
}
   
}
export default SignUp;