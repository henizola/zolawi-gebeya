import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SigninandsignupContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
	<SigninandsignupContainer>
		<SignIn />
		<SignUp />
	</SigninandsignupContainer>
);

export default SignInAndSignUpPage;
