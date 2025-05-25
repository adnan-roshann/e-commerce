import React from 'react';
import Card1 from "../../assets/Card-1.png";
import Card2 from "../../assets/Card-2.png";
import Card3 from "../../assets/Card-3.png";
import Card4 from "../../assets/Card-4.png";
import color1 from "../../assets/Color-1.png";
import color2 from "../../assets/Color-2.png";
import color3 from "../../assets/Color-3.png";
import color4 from "../../assets/Color-4.png";
import { AiOutlineHeart } from 'react-icons/ai';

const HeroSection = () => {
  const cards = [
    { name: 'Vonna neva walnut sandalye chair', price: "195,13$", image: Card1, bgImage: color1, color: 'bg-[#D3FBD9]' },
    { name: 'Wood Lamp,Floor Lamp,Lambader,Decorative', price: "458,43$", image: Card2, bgImage: color2, color: 'bg-[#FFE4BD]' },
    { name: 'NOCKBEY 3-Seat Sofa Cover Slipcover Hand Made With Multiple', price: "789,67$", image: Card3, bgImage: color3, color: 'bg-[#D9ABFD]' },
    { name: 'Lace Punch Needle Pillow with invisible Zipper,16*16 Inches ', price: "43,23$", image: Card4, bgImage: color4, color: 'bg-[#FDF0AB]' },
  ];

  return (
    <div className="w-full py-10 px-4 flex justify-center">
      <div className="max-w-7xl w-full flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => {
          const isFirst = index === 0;

          return (
            <div
              key={index}
              className={`relative w-[260px] h-[360px] ${card.color} rounded-2xl shadow-md p-4 hover:scale-105 transition duration-300 flex flex-col items-center`}
            >
              {/* Wishlist Icon */}
              <button className="absolute top-3 right-3 text-gray-700 bg-white rounded-full flex items-center justify-center hover:text-red-500 text-xl shadow">
                <AiOutlineHeart />
              </button>

              {/* Main Product Image */}
              <img
                src={card.image}
                alt={card.name}
                className={`object-contain z-10 mb-2 ${isFirst ? 'w-[140px] h-[140px]' : 'w-[120px] h-[120px]'}`}
              />

             
              <div className="flex flex-col items-start w-full pl-8 mt-1">
                <span className="text-sm font-medium text-gray-700 mb-[2px]">Colors</span>
                <img
                  src={card.bgImage}
                  alt="bg shape"
                  className={`object-contain ${isFirst ? 'w-[100px] h-[100px]' : 'w-[90px] h-[90px]'}`}
                />
               
              </div>

              
        <h2
  style={{ fontSize: '15px', textAlign:"start" }}
  className="font-medium text-gray-800 text-center mt-2 px-2"
>
  {card.name}
</h2>


              {/* Price */}
              <span className="absolute bottom-3 left-4 text-sm font-semibold text-gray-700">
                {card.price}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;
