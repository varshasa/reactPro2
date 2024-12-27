import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './Card.tsx';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center">Loading products...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Our Products</h2>

    
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-16">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            price={`$${product.price}`}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
