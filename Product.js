import React from 'react';
import './Style.css';

function Product({ name, price, image}) {
  return (
    <div className="product">
      <img src={image} className='Image' alt="Potato" />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
}

export default Product;
