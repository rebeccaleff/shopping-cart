import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Cart from './Cart.js';
import Checkout from './Checkout.js';
import Items from './Items.js';
import Detail from './Detail.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Items}/>
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/checkout" component={Checkout}/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('contents'));