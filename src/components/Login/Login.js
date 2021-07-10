import React from 'react';
import Auth from './UserAuth';

 
const Login = () => {
    const auth = Auth();

    const handleSignIN = () => {
        auth.isSignWithGoogle().then(res => {
       window.location.pathname = '/review';
  })
    }
    const handleSignOut = () => {
        auth.isSignWithGoogleOut().then(res =>{ 
        window.location.pathname = '/shop';
        })
    }

 
    return (
        <div>
        <h1>Please login user</h1> 
        {
            auth.user ?
            <button onClick={handleSignOut}>Sign Out</button> :
            <button onClick={handleSignIN}>Sign IN</button>
        }
        </div>
    );
};

export default Login;