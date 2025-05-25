import React from 'react';
import splash1 from "../../assets/Splash-1.png";
import splash2 from "../../assets/Splash-2.png";
import splash3 from "../../assets/Splash-3.png";

const SubHero = () => {
  const cards = [
    {
      id: 1,
      image: splash1,
      title: "A community       doing good",
      subtitle: "Commerce is a global online marketplace, Where people",
    },
    {
      id: 2,
      image: splash2,
      title: "Support independent creators",
      subtitle: "Just millions of people selling the things they love",
    },
    {
      id: 3,
      image: splash3,
      title: "Peace of mind",
      subtitle: "Privacy is the highest priority of our dedicated team.",
    },
  ];

  return (
    <div className="w-full py-10 px-4 flex justify-center">
      <div className="max-w-7xl w-full flex flex-wrap gap-4 justify-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-[320px] h-[140px] bg-[#E5E5E5] rounded-lg shadow-sm flex items-center justify-between px-4"
          >
            <div className="max-w-[180px]">
              <p className="text-black font-semibold text-md mb-1">
                {card.title}
              </p>
              <p className="text-gray-600 text-xs leading-tight">
                {card.subtitle}
              </p>
            </div>

            <img
              src={card.image}
              alt={`Splash ${card.id}`}
              className="w-[80px] h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHero;
