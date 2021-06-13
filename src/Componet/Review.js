import React, { useEffect, useState } from 'react';
import {getDatabaseCart, removeFromDatabaseCart,processOrder} from '../utilities/databaseManager'
import fakeData from '../fakeData'
import ReviewItem from './ReviewItem';
import Cart from './Cart';
import { 
    Link
  } from "react-router-dom";
import Auth from '../Admin/useAuth';



const Review = () => {

    const [cart,setCart] = useState([]);
     const auth =  Auth();

    const processOrders = () =>{
        setCart([])
        processOrder()
    }
    const removeProduct = (productKey) =>{
        const newCart = cart.filter((pd) => pd.key !== productKey)
            setCart(newCart) 
            removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
      const saveCart  = getDatabaseCart();
      const productKey = Object.keys(saveCart);
      const count = productKey.map((key) => {
         const product = fakeData.find((pd) => pd.key === key)
         product.quantity = saveCart[key];
         return product;
        })
     setCart(count)
    },[])

   
    return (
        <div>
            <div className="review-page">
            <div className="review">
            {
                cart.map((pd) => 
                    <ReviewItem 
                    removeProduct={removeProduct}
                    key={pd.key}
                    product={pd} ></ReviewItem>
                )
            }
            {
                !cart.length && <h1>Your cart is empty. <a href="/">keep shoping</a></h1>
            }
            </div>
            <div  className="Cart-area"> 
            <Cart cart={cart}>
            <Link to="/order" >
                 {
                   auth.user  ?
                  <button onClick={processOrders}   className="main-button">   proceed to checkout  </button> :
                  <button   className="main-button">   login to order  </button>
                  }
                </Link>
            </Cart>
            </div>
            </div>
        </div>
    );
};

export default Review;