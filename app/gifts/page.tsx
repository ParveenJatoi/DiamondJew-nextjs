import Image from 'next/image';

export default function Gallery() {
  return (
    <>
      {/* Gallery of Iconic Designs */}
      <section className="py-20 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-10">Gallery of Iconic Designs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-10">
          {['chokar.jpeg', 'chokar1.jpeg', 'fullset.jpeg', 'kara.jpeg', 'fullset3.jpeg', 'fullset4.jpeg'].map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={`/images/${img}`}
                alt={`Iconic Design ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <span className="text-white text-lg font-semibold">View Collection</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    
    </>
  );
}
