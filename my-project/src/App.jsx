import React from 'react';

const TourismCard = ({ image, title, rating, days, nights }) => (
  <div className="relative max-w-sm rounded overflow-hidden shadow-lg m-4 group">
    <img className="w-full" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-center">{title}</div>
    </div>
    <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
      <div className="text-lg font-bold">{title}</div>
      <div className="mt-2">
        <span className="block text-sm">Rating: {rating}</span>
        <span className="block text-sm">Days: {days}</span>
        <span className="block text-sm">Nights: {nights}</span>
      </div>
    </div>
  </div>
);

const App = () => {
  const travelOffers = [
    {
      image: 'https://via.placeholder.com/400',
      title: 'Trip to Paris',
      rating: '4.5/5',
      days: 7,
      nights: 6,
    },
    {
      image: 'https://via.placeholder.com/400',
      title: 'Explore Bali',
      rating: '4.8/5',
      days: 5,
      nights: 4,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {travelOffers.map((offer, index) => (
        <TourismCard key={index} {...offer} />
      ))}
    </div>
  );
};

export default App;