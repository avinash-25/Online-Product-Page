import React, { useState, useEffect } from 'react';
import Product from './Product';
import SearchBar from './SearchBar';
import productsData from './Product.json';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Product 
                   key={product.id}
                   name={product.name} 
                   price={product.price} 
                   Image={product.Image} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
