

"use client"

import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
  image: string;
  name: string;
  price: string;
}

const ProductSection: React.FC = () => {
  // Define product data
  const products: Product[] = [
    { image: "/images/ring4.jpg", name: "Diamond", price: "$299" },
    { image: "/images/diamond-ring5.jpg", name: "Diamond Ring", price: "$299" },
    { image: "/images/dimond.jpg", name: "Diamond", price: "$299" },
    { image: "/images/dimond3.jpg", name: "Diamond", price: "$299" },
    { image: "/images/neclace1.jpg", name: "Diamond Necklace", price: "$299" },
    { image: "/images/neclace4.jpg", name: "Diamond", price: "$199" },
    { image: "/images/pandat3.jpg", name: "Diamond Pandant", price: "$499" },
    { image: "/images/pandat5.jpg", name: "Diamond Pandant", price: "$149" },
    { image: "/images/earings2.jpg", name: "Diamond Earings", price: "$149" },
    { image: "/images/earings.jpg", name: "Diamond Earings", price: "$149" },
    { image: "/images/neclace5.jpg", name: "Diamond Necklace", price: "$149" },
    { image: "/images/ring3.jpg", name: "Diamond Ring", price: "$149" },
  ];

  // State to manage the selected product
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Function to handle view details
  const handleViewDetails = (product: Product) => {
    // Set the selected product to show details
    setSelectedProduct(product);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Our Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="relative w-full h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg group-hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-500 mt-2">{product.price}</p>
              </div>
              {/* Hover effect */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button
                  className="px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-black hover:text-white transition"
                  onClick={() => handleViewDetails(product)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for product details */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="bg-white rounded-lg p-8 w-80">
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              width={300}
              height={300}
              className="mb-4 rounded-lg"
            />
            <p className="text-xl">{selectedProduct.price}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSection;