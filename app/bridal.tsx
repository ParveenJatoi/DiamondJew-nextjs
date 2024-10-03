"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  imageSrc: string;
  price: string;
}

const bridalProducts: Product[] = [
  { id: 1, name: 'Bridal Necklace', imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTqg_iSBIb44KaNRKwc9TTh3CUiPdaovojw&s', price: '$3,000' },

  { id: 4, name: 'Engagment Neclace', imageSrc: 'data:image/jpeg;base64,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', price: '$2,200' },
  { id: 5, name: 'Reception Neclace', imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSck2UFsVAXj5wbFogNxmXCj-HzitUAHtkbdoshPqXRkg&s', price: '$4,000' },
];

const BridalCollection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="py-12 bg-white">
      <h2 className="text-center text-4xl font-bold mb-10">Bridal Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
        {bridalProducts.map((product) => (
          <div
            key={product.id}
            className="relative group flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            <div className="w-48 h-48 md:w-60 md:h-60 overflow-hidden">
              <Image
                src={product.imageSrc}
                alt={product.name}
                width={240}
                height={240}
                className="object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>

            {/* Quick View button */}
            <button
              onClick={() => openQuickView(product)}
              className="absolute opacity-0 group-hover:opacity-100 bottom-4 px-4 py-2 bg-black text-white rounded-lg transition-opacity duration-300"
            >
              Quick View
            </button>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-3xl w-full">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-black"
              onClick={closeQuickView}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="w-full md:w-1/2 h-60 overflow-hidden">
                <Image
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.name}
                  width={500}
                  height={500}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedProduct.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{selectedProduct.price}</p>
                <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BridalCollection;
