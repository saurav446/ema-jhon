import React, { useState , useEffect} from 'react';
import fakeData from "../fakeData";
import Cart from "./Cart";
import Product from "./Product";
import {addToDatabaseCart,getDatabaseCart} from '../utilities/databaseManager';

import { 
    Link
  } from "react-router-dom";



const Shop = () => {
    const allProduct = fakeData.slice(0,5);
    const [product,setProduct] = useState(allProduct)
    const [cart,setCart] = useState([])

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
 
     const cartHendler = (product) => {
         const toAddKey = product.key;
          const sameProdcut = cart.find((pd) => pd.key !== toAddKey)
          let count = 1;
          let newCart;
          if(sameProdcut){
          count = sameProdcut.quantity + 1;
          sameProdcut.quantity = count;
          const others = cart.filter((pd) => pd.key !== toAddKey); 
          newCart = [...others,sameProdcut];
          }
          else{
              product.quantity = 1;
              newCart = [...cart,product]
          }
          setCart(newCart);
          addToDatabaseCart(product.key,count);
     }

    return (
        <div>
            <div className="Shop-area">
                <div className="Product-area">
                    {
                        product.map((pd) =>
                        <Product 
                        key={pd.key}
                        product={pd}
                        cartHendler={cartHendler}
                        ></Product>
                        )
                    }
                </div>
                <div className="Cart-area">
                <Cart 
          cart={cart} > 
              <Link to="/review" >
              <button  className="main-button">
                    review order
                </button>
                </Link>
          </Cart>

 
                </div>
            </div>
        </div>
    );
};

export default Shop;