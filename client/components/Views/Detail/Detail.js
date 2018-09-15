import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let item = this.props.items.filter((el, idx) => {
      if (idx === this.props.from.index) {
        return el;
      }
    });

      let reviews = [];
      item[0]["reviews"].forEach((review) => {
        reviews.push(['Rating: ', review.rating, 'Title: ', review.title, 'Author: ', review.author, 'Body: ', review.body, '   ']);
      });

      if (item[0].inStock) {
        return (
          <div>
            Title: {item[0].title}
            <br></br>
            Price: ${item[0].price}
            <br></br>
            {/* tried pushing these tags into an array but they didn't display. Would optimize in the future */}
            <img src={item[0]["images"][0]} ></img>
            <img src={item[0]["images"][1]} ></img>
            <br></br>
            Description: {item[0].description}
            <br></br>
            <div>
              Reviews: {reviews}
            </div>
            <button onClick={(click) => this.props.addToCart(this.props.from.index, click)}>Add to cart</button>  
            <br></br>
            <Link 
                  to={{
                  pathname: '/cart',
                }} >View cart</Link>
          </div>   
        );
      } else {
        return (
          <div>
            Title: {item[0].title}
            <br></br>
            Price: ${item[0].price}
            <br></br>
            {/* tried pushing these tags into an array but they didn't display. Would optimize in the future */}
            <img src={item[0]["images"][0]} ></img>
            <img src={item[0]["images"][1]} ></img>
            <br></br>
            Description: {item[0].description}
            <br></br>
            <div>
            Reviews: {reviews}
            </div>
            In Stock: {item[0].inStock.toString()}
            <br></br>
            <Link 
                  to={{
                  pathname: '/cart',
                }} >View cart</Link>
          </div>   
        );
      }

    
  }  
}

export default Detail;