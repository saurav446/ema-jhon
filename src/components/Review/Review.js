import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart,processOrder } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import  './Review.css';
import {UserAuth} from '../Login/UserAuth';

const Review = () => {

    const [cart, setCart] = useState([]);
    
    const [oderPlace, setOderPlace] = useState(false);


      const auth = UserAuth();
    const handlePlaceholer = () => {
        setCart([]);
        setOderPlace(true)
        processOrder()
        
    }
    

    useEffect(() => {
      const savedCart = getDatabaseCart();
      const productKeys = Object.keys(savedCart);

      const cartProduct = productKeys.map( key => {
          const product = fakeData.find( pd => pd.key === key);
          product.quantity = savedCart[key];
          return product;
      });
    
      setCart(cartProduct);

    },[])

    const Removeproduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    let  thanks;
    if(oderPlace){
        thanks = <p>Thanks You For Your order</p>
    }
    
    return (
        <div className="remove">
        <div className="remove-area" >
            <h4>Cart Item: {cart.length}</h4>
           {
               cart.map(pd => <ReviewItem
                key={pd.key}
                Removeproduct={Removeproduct}
                product={pd}></ReviewItem> )
           }
           {
               thanks
           }
        </div>
        <div className="cart-area">
         <Cart cart={cart}>
             <Link to="/shipment">
            {
                auth.user ?
                <button  onClick={handlePlaceholer} className="main-button">Placeholer Order</button> :
                <button  className="main-button">Place Login</button>
                
             }
             </Link>
         </Cart>
        </div>
        </div>
    
    )};

export default Review;