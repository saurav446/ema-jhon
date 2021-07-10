import React from 'react';
// import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome' <FontAwesomeIcon icon={} />
// import {  } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
    const {name,img,seller,stock,price} = props.product;
    // console.log(props)
    return (
        <div>
            <div className="product-area mt-3">
                 <div className="product-img" >
                     <img src={img} alt="" />
                 </div>  
                 <div className="product-details" >
                     <p style={{color:'blue'}}>{name}</p>
                     <p>By{seller}</p>
                     <p>${price}</p>     cartHendlerz
                     <p>only {stock} left in stock - order soon</p>
                     <button onClick={() => props.cartHendler(props.product)} className="main-button">  add to cart</button>
                 </div>
            </div>
        </div>
    );
};

export default Product;