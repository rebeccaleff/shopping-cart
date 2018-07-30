import React, { Component } from 'react';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      items: []
    }
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(key, click) {
    console.log('inside add to cart');
    console.log('key: ', key, 'click: ', click);
    let copy = this.state.items.slice(0);
    console.log('copy: ', copy);
    // let selected = this.state.items.filter((item) => {
    //   return item.id === this.state.items.id
    // });
    // this.setState({cart: item});
  }

  componentDidMount() {
    fetch('/get-items')
    .then((res) => {
      return res.json()
    })
    .then((response) => {
      console.log('response: ', response);
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

    let display = [];
      this.state.items.forEach((item, index) => {
        return display.push(
        <div id={index} style={padding}>
          Title: {item.title}
          <br></br>
          Price: {item.price} 
          <br></br>
          <img src={item.thumbnail}/>
          <br></br>
          In Stock: {item.inStock.toString()}
          <br></br>
          Quantity: 1 
          <br></br>         
          <button onClick={(e) => this.addToCart(item.id, e)}>Add to cart</button>
        </div>
        )
      });

      console.log('show me the state: ', this.state);
    return (
      <div align="center">
        <h1>All items:</h1> 
         {display}
      </div>
    )
  }
}

export default Items;


