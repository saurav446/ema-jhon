import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
import 'firebase/auth'
import { createContext, useState,useContext, useEffect } from 'react';
import { 
    Route,
    Redirect
  } from "react-router-dom";



firebase.initializeApp(firebaseConfig);
 const UserContext = createContext();
export const AuthProvider = (props) =>{
     const auth = Auth();
   return  <UserContext.Provider value={auth} >
       {props.children}
     </UserContext.Provider>
 }

export const useAuth = () =>  useContext(UserContext);


export const  PrivateRoute =({ children, ...rest })=> {
    const auth = useAuth();
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



const get = (user) =>{
    const {email,displayName,photoURL} = user;
    return { email:email, name:displayName, photo:photoURL}
}

const Auth = () => { 
    const [user,setUser] = useState(null)
    const provider = new firebase.auth.GoogleAuthProvider();
    
     const singInPopUp = () => {
       return firebase.auth()
        .signInWithPopup(provider)
        .then((res) => {
            const signInUser = get(res.user);
            setUser(signInUser)
            console.log(signInUser)
        }).catch((error) => {
            console.log(error)
            return error.message;
          });
     }
     const signInUserOut = () =>{
        firebase.auth().signOut().then(() => {
            setUser(null)
          }).catch((error) => {
            console.log(error)
            return error.message;
          });
     }
     useEffect(() =>{
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const setUp = get(user);
                setUser(setUp)
            } 
          });
     },[])

     return {
        user,
        singInPopUp,
        signInUserOut
    }
}

export default Auth;