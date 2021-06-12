import React, { useEffect, useState } from 'react';
import {getDatabaseCart, removeFromDatabaseCart} from '../utilities/databaseManager'
import fakeData from '../fakeData'
import ReviewItem from './ReviewItem';
import Cart from './Cart';


const Review = () => {

    const [cart,setCart] = useState([]);
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
            <h4 style={{textAlign:'left'}}>review all Item  {cart.length}</h4>
            
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
            </div>
            <div className="Cart-area"> 
            <Cart cart={cart}></Cart>
            </div>
            </div>
        </div>
    );
};

export default Review;