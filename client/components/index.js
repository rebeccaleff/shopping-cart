import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Cart from './Cart.js';
import Items from './Items.js';
import Detail from './Detail.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      items: []
    }
    this.addToCart = this.addToCart.bind(this);
    this.changeFrom = this.changeFrom.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(index, click) {
    let selected = this.state.items.filter((item, i) => {
      return i === index
    });
    alert('Successfully added to cart!');
    let copyCart = this.state.cart.slice(0);
    this.setState({ cart: copyCart.concat(selected) });
  }

  removeFromCart(index, click) {
    // remove item from cart
    
  }

  changeFrom(index, click) {
    this.setState({ from: index });
  }

  componentDidMount() {
    this.setState({ items: allItems });
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Items cart={ this.state.cart } items= { this.state.items } addToCart= { this.addToCart } changeFrom={ this.changeFrom }/>} />
          <Route path="/detail/:id" render={() => <Detail cart={ this.state.cart } items= { this.state.items } addToCart= { this.addToCart } from={ this.state.from } />}/>
          <Route path="/cart" render={() => <Cart cart={ this.state.cart } items= { this.state.items } addToCart= { this.addToCart } removeFromCart= {this.removeFromCart } />}/>
        </div>
      </Router>
    );
  }
}

let allItems;

fetch('/get-items')
.then((res) => {
  return res.json()
})
.then((response) => {
  allItems = response;

  ReactDOM.render(<App/>, document.getElementById('contents'));

})
.catch((err) => console.log(err));


