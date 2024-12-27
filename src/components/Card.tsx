// src/components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

const Card: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-content" />
      <div className="flex-grow p-4">
        <h3 className="text-md font-semibold truncate">{name}</h3>
        <p className="text-gray-600 mt-2">{price}</p>
        <button className=" w-1/3 left-3 bg-green-500 text-white py-2 rounded hover:bg-gray-600 md:text-md w-20">
          Buy now
        </button>
        <button className="absolute w-1/3 right-3 bg-yellow-500 text-white py-2 rounded hover:bg-gray-600 md:text-md w-20">
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default Card;
