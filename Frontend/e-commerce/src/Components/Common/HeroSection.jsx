import React from 'react';

const HeroSection = () => {
  const cards = [
    { title: 'Explore Trends', color: 'bg-[#D3FBD9]' },
    { title: 'Shop Collections', color: 'bg-[#FFE4BD]' },
    { title: 'Explore Trends', color: 'bg-[#D9ABFD]' },
    { title: 'Explore Trends', color: 'bg-[#FDF0AB]' },
  ];

  return (
    <div className="w-full  py-10 px-4 flex justify-center">
      <div className="max-w-7xl w-full flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-[260px] h-[360px] ${card.color} rounded shadow-md flex items-center justify-center text-center p-4 hover:scale-105 transition duration-300`}
          >
            <h2 className="text-lg font-semibold text-gray-800">{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
