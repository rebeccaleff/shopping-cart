import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import './Items.css';

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
      if (item.inStock) {
        return display.push(
          <div className="item-outer-div" id={index} style={padding}>
            <Link onClick={(click) => this.props.changeFrom({index}, click)}
              to={{
              pathname: `/detail/${item.id}`
            }} >{item.title}</Link>
            <br></br>
            Price: ${item.price} 
            <br></br>
            <img src={item.thumbnail}/>
            <br></br>
            In Stock: {item.inStock.toString()}
            <br></br>         
            <button onClick={(e) => this.props.addToCart(index, e)}>Add to cart</button>
          </div>
          )
      } else {
        return display.push(
          <div className="item-outer-div" id={index} style={padding}>
            <Link onClick={(click) => this.props.changeFrom({index}, click)}
              to={{
              pathname: `/detail/${item.id}`
            }} >{item.title}</Link>
            <br></br>
            Price: ${item.price} 
            <br></br>
            <img src={item.thumbnail}/>
            <br></br>
            In Stock: {item.inStock.toString()}
            <br></br>         
          </div>
          )
      }

    });

    return (
      <div className="outer-item-grid">
        <h3>Available items:</h3> 
         {display}
      </div>
    )
  }
}

export default Items;


