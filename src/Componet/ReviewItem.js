import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,key} = props.product; 
    return (
        <div>
            <div className="reviewItem-area"> 
            <h4>{name}</h4>
            <p>Quantity : {quantity}</p>
            <button onClick={() => props.removeProduct(key)} className="main-button">remove item</button>
         </div>
        </div>
    );
};

export default ReviewItem;