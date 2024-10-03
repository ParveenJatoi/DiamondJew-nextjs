export default function NewsStrip() {
    return (
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto overflow-hidden">
          <p className="marquee text-sm flex">
            <span className="mx-4">🌟 Get 20% off on all diamond jewelry collections this weekend!</span>
            <span className="mx-4">💎 New arrivals: Check out our stunning Galaxy Collection today!</span>
            <span className="mx-4">✨ Free shipping on orders over $500! Hurry, limited time only!</span>
          </p>
        </div>
      </div>
    );
  }