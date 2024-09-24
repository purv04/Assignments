// ProductCardList.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductCardList.css'; // For styling

const ProductCardList = () => {
  const [products, setProducts] = useState([]);  // Manage products state
  const [loading, setLoading] = useState(true);  // Manage loading state
  const [error, setError] = useState(null);  // Manage error state

  useEffect(() => {
    // Fetch data from API
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);  // Update products state with fetched data
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);  // Empty array ensures this effect runs only once

  // Display loading message
  if (loading) {
    return <p>Loading products...</p>;
  }

  // Display error message
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="product-card-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCardList;