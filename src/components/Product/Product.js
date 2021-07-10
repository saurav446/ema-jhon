import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    // console.log(props.product.key);
    const {img,name,stock,seller,price,key} = props.product;
    
    return (
        <div className="product">
            <div className="product-image">
               <img src={img}></img>
            </div>
             <div className="product-name">
               { props.linkOff && <h4 className="product-names">{name}</h4>}
               { props.linkOffs &&  <h4 className="product-names"><Link to={"product/"+key}>{name}</Link></h4>}
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                { props.addToCart && <button onClick={() => props.handleAddproduct(props.product)}
                  className="main-button">add to cart</button>}
            </div> 
        </div>
    );
};

export default Product;