import React, { useState, useEffect } from 'react';
import Product from './Product';
import SearchBar from './SearchBar';
import productsData from './Product.json';
import Navbar from './Navbar';
import Footer from './Footer';
import './Store.css';

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
      <Navbar/>
      <SearchBar onSearch={handleSearch} />
      <div className='product-list'>
      {productsData.map((product) => (
        <Product key={product.id} name={product.name} 
         price={product.price} 
        imageUrl={product.imageUrl} />
      ))}
    </div>
      <Footer/>
    </div>
  );
}

export default ProductPage;
