import React, { useContext } from 'react'; 
import useAuth from './useAuth';

const Login = () => {
    const auth = useAuth();
    const handleSignIn = ()=>{
        auth.singInPopUp()
        .then(res =>{
            window.location.pathname = '/';
        })
    }
    return (
        <div>
            {
                auth.user ? 
                <button  onClick={auth.signInUserOut} >SignIn Out</button>
                :
                <button onClick={handleSignIn} >Sign In</button>
            } 
        </div>
    );
};

export default Login;