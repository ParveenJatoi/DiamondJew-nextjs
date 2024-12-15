"use client"
import React from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  imageSrc: string;
  price: string;
}

const products: Product[] = [
  { id: 1, name: 'Diamond Ring', imageSrc: '/images/ring4.jpg', price: '$2,000' },
  { id: 2, name: 'Gold Necklace', imageSrc: '/images/neclace1.jpg', price: '$1,500' },
  { id: 3, name: 'Silver Earrings', imageSrc: '/images/earings2.jpg', price: '$800' },
  { id: 4, name: 'Platinum Necklace', imageSrc: '/images/neclace3.jpg', price: '$2,500' },
  { id: 5, name: 'Emerald Pendant', imageSrc: '/images/pandat3.jpg', price: '$3,200' },
  { id: 5, name: 'Emerald Neclace', imageSrc: '/images/chokar.jpeg', price: '$3,200' },
  { id: 5, name: 'Emerald CasualSet', imageSrc: '/images/casual.jpeg', price: '$3,200' },
];

const FeaturedCollection: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-center text-4xl font-bold mb-10">Featured Collection</h2>
      <div className="overflow-hidden relative">
        <div className="animate-slide flex space-x-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col items-center space-y-4 transform transition-transform duration-500 hover:scale-105"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-500">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default FeaturedCollection;