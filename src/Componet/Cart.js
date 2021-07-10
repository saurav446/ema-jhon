import React from 'react'; 


const Cart = (props) => {
    const cart = props.cart;
    
    let total = 0;
    for(let i = 0; i < cart.length; i++){
      let product = cart[i];
     total = total + product.price * product.quantity;
    (total).toFixed(2);
    }

    let Shipping = 0;
    if(total > 30){
      Shipping = 0
    }
    else if(total > 15){
        Shipping = 4.50
    }
    else if(total > 0){
        Shipping = 12.02
    }
   const tex = (total / 10).toFixed(2);
    const allTotal = (total + Shipping + Number(tex)).toFixed(2);
    const totals = (total).toFixed(2)

    return (
        <div className="cart">
           <div className="cart-area">
                <h4>Order Summary</h4>
                <p>Items ordered: {cart.length}</p>
                <p>Total: ${totals}</p>
                <p>Tex + VAT: ${tex}</p>
                <p>Shipping Cost: ${Shipping}</p>
                <p>Order Total: ${allTotal} </p>
                {
                    props.children
                }
           </div> 
        </div>
    );
};

export default Cart;