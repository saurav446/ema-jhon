import React from 'react';
import logo from '../images/logo.png';



const Header = () => {
    return (
        <div>
            <div className="header-area">
                <div className="logo-area">
                    <img src={logo} alt="" />
                </div>
                <div className="nav-bar"> 
                    <a href="/" >Shop</a>
                    <a href="f" >Order Review</a>
                    <a href="f" >Manage Inventory</a>
                </div>
            </div>
        </div>
    );
};

export default Header;