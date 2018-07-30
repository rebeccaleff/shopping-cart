import React, { Component } from 'react';

const Detail = (props) => {
  // console.log('state: ', props.location.state);

  let item = props.location.state.items.filter((el, idx) => {
    if (idx === props.location.state.from.index) {
      return el;
    }
  });

  console.log('item: ', item);

  let pics = [];
  item[0]["images"].forEach((pic, index) => {
    pics.push(<img src={item[0]["images"]["index"]} />)
  });

  console.log('pics: ', pics);

  return (
    <div>
      <h1>{item[0].title}</h1>
      <h2>{item[0].price}</h2>
      { pics }
    </div>   
  );
}

export default Detail;