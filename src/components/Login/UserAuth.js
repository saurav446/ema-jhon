import firebase from "firebase/app";
import "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { Redirect, Route } from "react-router";
import firebaseConfig from "../../firebaseConfig";
firebase.initializeApp(firebaseConfig);
 
 const AuthContext = createContext();

 export const AuthContextProvider =  (props) => {
     const auth = Auth();
     return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
 }
 
 export const UserAuth = () =>{
     return   useContext(AuthContext);
 }
 
 const getUser =  (user) => {
     
    const {displayName,email,photoURL} = user;
    return {name:displayName,email,photo:photoURL};
 }

export const  PrivateRoute = ({ children, ...rest }) => {
  const auth = UserAuth();
  return (
    
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


  const Auth = () => {
    const [user,setUser] = useState(null);
    const  provider = new firebase.auth.GoogleAuthProvider();
    const isSignWithGoogle = () => {
   return firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const isSignDitais = getUser(result.user);
      setUser(isSignDitais);

    return result.user;
  })
}

  useEffect(() =>{

    firebase.auth().onAuthStateChanged(function(usr) {
        if (usr) {
          const userget = getUser(usr);
          setUser(userget);
        } else {
          // No user is signed in.
        }
      });
      
  },[])
 const isSignWithGoogleOut = () => {
   return firebase.auth().signOut().then(() => {
        setUser(null);
        return true;
      })
 }
  return{
    isSignWithGoogleOut,
    isSignWithGoogle,
    user
  }
   
};


export default Auth;

