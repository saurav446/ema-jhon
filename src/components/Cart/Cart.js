import React from 'react';

const Cart = (props) => {
    const cart = props.cart; 
    let total = 0;
    for(let i = 0; i<cart.length; i++){
        const product = cart[i];
        
        total = total + product.price * product.quantity;
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 14){
        shipping = 4;
    }
    
    else if(total > 0){
        shipping = 12;
    }
    const tex = total / 10;
    const formatNumber = num => {
        const rounded = num.toFixed(2);
        return Number(rounded);
    }  
    
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Item: ${formatNumber(total)}</p>
            <p>Shipping Cost: ${shipping}</p>
            <p>Tex + VAT: ${formatNumber (tex)}</p>
            <p>Order Total: ${formatNumber(total + tex + shipping)} </p>
            {
                props.children
            }
        </div>
    );
};
 
export default Cart;