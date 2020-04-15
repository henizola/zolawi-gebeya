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
render(){
  
     return(
        <div className='sign-up'>
            <h2  className='title'>I dint have an account</h2>
            <span>Sign-up with your email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
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

                <CustomButton>Register</CustomButton>

            </form>

        </div>
    );
}
   
}
export default SignUp;