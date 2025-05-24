import React, { useState } from 'react';

const CategoriesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = ['Electronics', 'Clothing', 'Books', 'Home', 'Toys', 'Sports'];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#EB6D20] text-white px-4 py-2 rounded-lg hover:bg-[#ffb688] transition duration-200"
      >
        Categories
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-1">
            {categories.map((category, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;
