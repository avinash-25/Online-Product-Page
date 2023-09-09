import React from 'react';

function Product({ name, price, imageUrl }) {
  return (
    <div className="product">
      <img className='pic' src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
    </div>
  );
}

export default Product;
