import React from 'react';
import logo from '../../images/logo.png';
import Auth, { UserAuth } from '../Login/UserAuth';
import './Header.css';

const Header = () => {
    const userAuth = UserAuth();
    console.log(userAuth);
    return (
        <div className="header-logo">
            <img src={logo} alt="" />
            <nav>
                <a href="/shop" >Shop</a>
                <a href="/review" >Order Review</a>
                <a href="/inventory" >Manage Inventory</a>
                {
                    userAuth.user && <span style={{color:"yellow"}} >{userAuth.user.name}</span> 
                }
                {
                    userAuth.user ?
                    <a href="/login" >Sign Out</a> :
                    <a href="/login" >Sign IN</a>
                }
            </nav>
            
        </div>
    );
};

export default Header;