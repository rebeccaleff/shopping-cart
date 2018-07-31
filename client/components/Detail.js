import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

const Detail = (props) => {
  console.log('state: ', props.location.state);

  let item = props.location.state.items.filter((el, idx) => {
    if (idx === props.location.state.from.index) {
      return el;
    }
  });

  console.log('item: ', item);

  let pics = [];
  item[0]["images"].forEach((pic, index) => {
    pics.push(<img src={index} />)
  });
  // - Title
  // - Price
  // - Image(s)
  // - In stock status (In stock/Out of stock)
  // - Description
  // - Quantity to purchase
  // - “Add to Cart” button
  // - Reviews (out of 5)
  // console.log('pics: ', pics);

  let reviews = [];
  item[0]["reviews"].forEach((review) => {
    reviews.push(['Rating: ', review.rating, 'Title: ', review.title, 'Author: ', review.author, 'Body: ', review.body, '   ']);
  });

  return (
    <div>
      <div>
        Title: {item[0].title}
        <br></br>
        Price: ${item[0].price}
        <br></br>
        <img src={item[0]["images"][0]} ></img>
        <img src={item[0]["images"][1]} ></img>
        <br></br>
        Description: {item[0].description}
        <br></br>
        <div>
          Reviews: {reviews}
        </div>
        <button>Add to cart</button>  
        <br></br>
        <Link 
              to={{
              pathname: '/cart',
            }} >View cart</Link>
      </div>
    </div>   
  );
}

export default Detail;