import React, { Component } from 'react';

const Cart = (props) => {
  console.log('props: ', props);

  let sum = 0;
  let adding = props.cart.forEach((item) => {
    sum += item.price;
  });

    // creates a new div for each item with required info
    let display = [];
      props.cart.forEach((item, index) => {
        return display.push(
        <div id={index} >
          Title: {item.title}
          <br></br>
          Price: ${item.price} 
          <br></br>
          Quantity: 1 
          <br></br>         
          <button onClick={(e) => props.removeFromCart(index, e)}>Remove from cart</button>
        </div>
        )
      });
  
  return (
    <div>
      <h3>Cart </h3>
      {display}
      <br></br>
      <br></br>
      Total: $ {sum}
      <br></br>
      {/* Didn't get to this, but for quantity (with the ability to adjust) would implement a dropdown button and have it be connected to the in stock status.
      Quantity would be imported on all items and decreased when item is added to cart / increased with removed */}

      Sales tax: $ {Math.round((sum * 0.08875) * 100) / 100}
      <br></br>
      Shipping: $9.99
      <br></br>
      Grand total: ${Math.round((sum + (sum * 0.08875) + 9.99) * 100) / 100}
      
    </div>   
  );
}

export default Cart;