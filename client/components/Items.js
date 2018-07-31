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
    this.state = {
      cart: [],
      items: []
    }
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(index, click) {
    let selected = this.state.items.filter((item, i) => {
      return i === index
    });
    alert('Successfully added to cart!');
    let copyCart = this.state.cart.slice(0);
    this.setState({cart: copyCart.concat(selected)});
  }

  componentDidMount() {
    fetch('/get-items')
    .then((res) => {
      return res.json()
    })
    .then((response) => {
      this.setState({items: response});
    })
    .catch((err) => console.log(err));
  }

  render() {

    let padding = {
      padding: 15,
      margin: 15,
      textAlign: "center"
    }

    // creates a new div for each item with required info
    let display = [];
      this.state.items.forEach((item, index) => {
        return display.push(
        <div id={index} style={padding}>
          <Link 
            to={{
            pathname: `/detail/${item.id}`,
            state: { cart: this.state.cart, items: this.state.items, from: {index} }
          }} >Title: {item.title}</Link>
          <br></br>
          Price: ${item.price} 
          <br></br>
          <img src={item.thumbnail}/>
          <br></br>
          In Stock: {item.inStock.toString()}
          <br></br>
          Quantity: ? 
          <br></br>         
          {/* I would usually include the item.id instead of the index, but there are duplicate ids */}
          <button onClick={(e) => this.addToCart(index, e)}>Add to cart</button>
        </div>
        )
      });

      console.log('state: ', this.state);

    return (
      <div align="center">
        <h1>An overwhelming number of options:</h1> 
        <Link 
            to={{
            pathname: '/cart',
            state: { cart: this.state.cart, items: this.state.items }
          }} >View Cart</Link>
         {display}
      </div>
    )
  }
}

export default Items;


