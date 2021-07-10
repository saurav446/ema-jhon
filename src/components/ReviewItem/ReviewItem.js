import React from 'react';
import  './ReviewItem.css';
const ReviewItem = (props) => {
    const {name,quantity,key,price} = (props.product);
    
    return (
        <div>
            <div className="review-ditails">
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p>$<small>{price}</small></p>
            <button 
                  className="main-button"
                  onClick={() => props.Removeproduct(key)}>Remove</button>
            </div>
        </div>
    );
};


export default ReviewItem;