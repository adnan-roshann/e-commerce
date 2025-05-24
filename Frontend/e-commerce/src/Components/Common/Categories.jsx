import React from 'react';
import category1 from "../../assets/category-1.jpg";
import category2 from "../../assets/category-2.jpg";
import category3 from "../../assets/category-3.jpg";
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { name: 'Clothing & Shoes', path: 'clothing', image: category1 },
    { name: 'Home & Living', path: 'living', image: category2 },
    { name: 'Art & Collectibles', path: 'art', image: category3 },
  ];

  return (
    <div className="product__grid flex gap-6 ">
      {categories.map((category, index) => (
        <Link
          to={`/categories/${category.path}`}
          key={index}
          className="relative overflow-hidden rounded-lg shadow-md group"
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full  object-cover group-hover:scale-105 transition duration-300"
          />
          <h4 className="absolute bottom-3 left-30 transform -translate-x-1/2 text-white text-sm font-semibold drop-shadow-md">
            {category.name}
          </h4>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
