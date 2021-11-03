import React from 'react';

import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../Component/sign-in/sign-in.component';
import SignUp from '../../Component/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
        </div>
);

export default SignInAndSignUpPage;
