import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const data10 = fakeData.slice(0,10);
    const [products,setProduct] = useState(data10);
    const [cart,setCart] = useState([]);
    
    useEffect(() =>{
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const previousCart = productKey.map(Xkey => {
         const product = fakeData.find(pd => pd.key === Xkey);
         product.quantity = savedCart[Xkey];
         return product;
        })
        setCart(previousCart);

    }, []);

    const handleAddproduct = (product) => {
    const toBeAddedkey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddedkey);
    let count = 1;
    let newCart;
     if(sameProduct){
         count = sameProduct.quantity + 1;
         sameProduct.quantity = count;
         const others = cart.filter(pd => pd.key !== toBeAddedkey);
         newCart = [...others,sameProduct];
        }
     else{
        product.quantity = 1;
        newCart = [...cart,product];
     }



    //  const counts = sameProduct.length;
    //  const newCart = [...cart,product];
     setCart(newCart);
     addToDatabaseCart(product.key, count);
    }


    return (
        <div className="shop-container">
            <div className="product-container">
            <ul>
                {
                    products.map((pd) => <Product
                    key={pd.key}
                    addToCart={true}
                    linkOff={false} linkOffs={true}
                    handleAddproduct={handleAddproduct}
                     product={pd}
                     
                     ></Product>)
                }
            </ul>
            </div>
            <div className="cart-container">

          <Cart 
          cart={cart} >
              <Link to="/review">
            <button className="main-button">Review Order</button>
            </Link>
          </Cart>
            
            </div>
        </div>
    );
};

export default Shop;