import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

class Items extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    
    let padding = {
    padding: 15,
    margin: 15,
    textAlign: "center"
  }

  // creates a new div for each item with required info
  let display = [];
  let idx;
    this.props.items.forEach((item, index) => {
      idx = {index};
      return display.push(
      <div id={index} style={padding}>
        <Link onClick={(click) => this.props.changeFrom({index}, click)}
          to={{
          pathname: `/detail/${item.id}`
        }} >Title: {item.title}</Link>
        <br></br>
        Price: ${item.price} 
        <br></br>
        <img src={item.thumbnail}/>
        <br></br>
        In Stock: {item.inStock.toString()}
        <br></br>
        Quantity: 1 
        <br></br>         
        {/* I would usually include the item.id instead of the index, but there are duplicate ids */}
        <button onClick={(e) => this.props.addToCart(index, e)}>Add to cart</button>
      </div>
      )
    });

    return (
      <div align="center">
        <h1>An overwhelming number of options:</h1> 
        <Link 
            to={{
            pathname: '/cart',
          }} >View Cart</Link>
         {display}
      </div>
    )
  }
}

export default Items;


