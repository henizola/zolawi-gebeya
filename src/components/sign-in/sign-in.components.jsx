import React from 'react';
// import Form from '../form/fm.component'
import './sign-in.styles.scss'
import FromInput from '../form/form.component';
import CustomButton from '../custom-button/custom-button.component'
import {auth,signInWithGoogle} from '../../firebase/firebase.utils'
class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
                email:'',
                password:''
        }
    }
    handleChange=e=>{
        const {value,name}=e.target;
        this.setState({[name]:value})
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const { email,password}=this.state
        try{
                await auth.signInWithEmailAndPassword(email,password) 
                  this.setState({email:'', password:''})
        }catch(e)
        {
            console.log('unable to sign in with email and password',e)
        }
     
    }

    render(){
        return(
            <div className='sign-in'>
            <h2 className='title'>I alredy have an account</h2>
            <span>sign-in with your email and password</span>
            <form className='form' onSubmit={this.handleSubmit}>
                <FromInput
                 handleChange={this.handleChange}
                  name='email' 
                  type="email" 
                  lable='EMAIL'
                  value={this.state.email}
                  required/>
               
                <FromInput 
                handleChange={this.handleChange}
                name='password' 
                type="password" 
                lable='PASSWORD'
                value={this.state.password}
                required/>
                <div className='buttons'>
                    <CustomButton type="submit" value='sign-in' onClick={this.handleSubmit}>SIGN IN</CustomButton>
                <CustomButton isGoogleSignIn onClick={signInWithGoogle} value='sign-in'>SIGN IN WITH GOOGLE</CustomButton>
                </div>
                
             </form>
            </div>
        )
    }
}
export default SignIn;