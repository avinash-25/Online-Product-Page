import React from 'react';
import Product from './Product';
import productsData from "./Product.json";
const ProductList = () => {
  return (
    <div>
      {productsData.map((product) => (
        <Product key={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl} />
      ))}
    </div>
  );
};

export default ProductList;
