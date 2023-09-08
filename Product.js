import React from 'react';

function Product({ name, price, Image}) {
  return (
    <div className="product">
      <span>
      <img className='pic' src={Image} alt= {name} />
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      </span>
    </div>
  );
}

export default Product;
