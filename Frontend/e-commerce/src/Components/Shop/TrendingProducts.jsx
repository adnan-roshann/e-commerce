import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import SmCard1 from "../../assets/smallcard-1.png";
import SmCard2 from "../../assets/smallcard-2.png";
import SmCard3 from "../../assets/smallcard-3.png";
import SmCard4 from "../../assets/smallcard-4.png";
import SmCard5 from "../../assets/smallcard-5.png";
import SmCard6 from "../../assets/smallcard-6.png";
import SmCard7 from "../../assets/smallcard-7.png";
import SmCard8 from "../../assets/smallcard-8.png";

const cardData = [
  { image: SmCard1, label: "Craft gifts" },
  { image: SmCard2, label: "Throw pillows" },
  { image: SmCard3, label: "Natural Glass" },
  { image: SmCard4, label: "Self-care" },
  { image: SmCard5, label: "Gift ideas" },
  { image: SmCard6, label: "Wall decor" },
  { image: SmCard7, label: "Wedding" },
   { image: SmCard8, label: "Life style" },
];

const TrendingProducts = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="section__container product__container px-6 relative">
      <h2 className="text-xl font-semibold mb-1">
        Find things you'll love. Support independent sellers.
      </h2>
      <p className="text-sm text-gray-500 mb-6">Only on plka.</p>

      
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-gray-100"
      >
        <FaChevronRight />
      </button>

     
      <div
        ref={scrollRef}
        className="flex space-x-4 pl-35 overflow-x-auto scrollbar-hide pb-2"
      >
        {cardData.map((card, index) => (
      <div
  key={index}
  className="min-w-[120px] flex flex-col items-center text-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
  onClick={() => console.log(`Clicked: ${card.label}`)}
>
  <div className="w-[120px] h-[120px] bg-white rounded-lg shadow-md flex items-center justify-center border">
    <img
      src={card.image}
      alt={card.label}
      className="w-[80px] h-[80px] object-contain"
    />
  </div>
  <p className="text-[10px] text-gray-600 mt-1">{card.label}</p>
</div>


        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
