import React from 'react';
import './sign-in-and-sign-up.styles.scss'
import SignIn from '../sign-in/sign-in.components'
import SignUp from '../sign-up/sign-up.component';
const SignInAndSignUpPage = () =>(
    <div className='sign-in-sign-up'>
        <SignIn />
        <SignUp/>
    </div>
);

export default SignInAndSignUpPage;