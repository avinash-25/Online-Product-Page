import React from 'react';
import Product from './Product';
import productsData from "./Product.json";
const ProductList = () => {
//   const productsData = [
//     {
//       "id": 1,
//       "name": "Potato",
//       "price": 30,
//       "imageUrl": "./potato.jpg"
//     },
//     {
//       "id": 2,
//       "name": "Sugar",
//       "price": 40,
//       "imageUrl": "./sugar.jpg"
//     },
//     // Add more products with imageUrls
//   ];

  return (
    <div>
      {productsData.map((product) => (
        <Product key={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl} />
      ))}
    </div>
  );
};

export default ProductList;
