import Image from 'next/image';

export default function DiscountedItemsGallery() {
  const items = [
    { src: '/ring3.jpg', alt: 'Discounted Ring', discount: '20%' },
    { src: '/neclace4.jpg', alt: 'Discounted Necklace', discount: '15%' },
    { src: '/earings2.jpg', alt: 'Discounted Earrings', discount: '10%' },
    { src: '/pandat3.jpg', alt: 'Discounted Panda', discount: '25%' },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <h2 className="text-3xl font-semibold text-center text-white mb-10">
        Discounted Items
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image of the item */}
            <Image
              src={`/images/${item.src}`}
              alt={item.alt}
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
            />

            {/* Discount Badge */}
            <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-semibold py-1 px-3 rounded-full">
              {item.discount}
            </div>

            {/* Overlay with "View Details" button */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <span className="text-white text-lg font-semibold">View Details</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
