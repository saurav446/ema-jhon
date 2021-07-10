import React from 'react';
import logo from '../images/logo.png';
import { 
    Link
  } from "react-router-dom";
import { useAuth } from '../Admin/useAuth';


const Header = () => {
    const auth = useAuth();
    return (
        <div>
            <div className="header-area">
                <div className="logo-area">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-bar"> 
                    <a href="/" >Shop</a>
                    <a href="/order" >Order Review</a>
                    <a href="f" >Manage Inventory</a>
                    {
                    auth.user &&
                    <span
                      style={{color:'white', marginLeft:'2rem',fontSize:'20px', marginRight:'1rem'}}
                       >{auth.user.name}</span>
                   }
                   {
                       auth.user ?  
                       <button onClick={auth.signInUserOut} >Sign Out</button> : 
                       <a href="/login" ><button >Sign In</button></a>
                   }
                </div>
            </div>
        </div> 
    );
};

export default Header; 