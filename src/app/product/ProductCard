import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition-shadow">
      <img className="w-full h-64 object-cover" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
          {product.category}
        </span>
        <div className="font-bold text-xl mb-2 text-gray-800">{product.name}</div>
        <p className="text-gray-600 text-sm">
          {product.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-6 flex justify-between items-center">
        <span className="text-2xl font-bold text-gray-900">{product.price}€</span>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full transition-colors">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
