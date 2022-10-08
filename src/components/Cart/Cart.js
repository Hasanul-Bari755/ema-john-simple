import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
      console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (let product of cart) {
       
        total = total + product.price * product.quantity; 
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = parseFloat(((total * 10) / 100).toFixed(2));
    const grandTotal = total + shipping + tax;
    console.log({ total, shipping, quantity, tax })
    return (
        <div className='cart'>
             <h4>Order Sammary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${shipping} </p>
            <p>Total Tax: ${tax} </p>
            <h5>Grand Total: ${grandTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;