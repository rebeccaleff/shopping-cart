import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Cart from './Views/Cart/Cart.js';
import Items from './Views/Items/Items.js';
import Detail from './Views/Detail/Detail.js';
import './App.css';

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
    fetch('/get-items')
      .then((res) => {
        return res.json()
      })
      .then((response) => {
        this.setState({ items: response });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Router>
        <div>
          <div className="nav-bar">
            <div className="project-name">Project Name</div>
            <ul className="nav-menu">
              <li className="nav-buttons"> 
                <Link to={{ pathname: '/' }}> Items</Link>
              </li>
              <li className="nav-buttons">
                <Link to={{ pathname: '/cart' }}> Cart</Link>
              </li>
            </ul>
          </div>
          <div className="views">
            <Route exact path="/" render={() => <Items cart={this.state.cart} items={this.state.items} addToCart={this.addToCart} changeFrom={this.changeFrom} />} />
            <Route path="/detail/:id" render={() => <Detail cart={this.state.cart} items={this.state.items} addToCart={this.addToCart} from={this.state.from} />} />
            <Route path="/cart" render={() => <Cart cart={this.state.cart} items={this.state.items} addToCart={this.addToCart} removeFromCart={this.removeFromCart} />} />
          </div>
          <div className="footer"> 
            <ul className="footer-menu">
              <li className="contact-links"> 
                <Link to={{ pathname: '/' }}> GitHub</Link>
              </li>
              <li className="contact-links"> 
                <Link to={{ pathname: '/' }}> Created by: Rebecca Leff </Link>
              </li>
              <li className="contact-links">
                <Link to={{ pathname: '/cart' }}> Linked In</Link>
              </li>
            </ul>
          </div>  
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('contents'));

