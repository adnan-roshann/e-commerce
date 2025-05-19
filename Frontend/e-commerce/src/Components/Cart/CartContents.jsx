import React from 'react'
import {RiDeleteBin3Line} from "react-icons/ri"

const CartContents = () => {
  const cartProducts =[{
    productId: 1,
    name: "Shoe",
    size: 42,
    color: "green",
    quantity: 1,
    price: 1500,
    image:"https://picsum.photos/200?random=1",
    


  },
  {
    productId: 2,
    name: "socks",
    size: "s",
    color:"red",
    quantity: 1,
    price: 150,
    image:"https://picsum.photos/200?random=2",
    


  },
];
  return (
    <div >
      {
        cartProducts.map((product, index )=> (
          <div key={index} className='flex items-start justify-between py-4 border-b border-gray-300'>
            <div className='flex  items-start'>
              <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4 rounded'/>
              <div>
                <h3 className='text-black'>{product.name}</h3>
                <p className='text-gray-500 text-sm '> 
                  size: {product.size} | color: {product.color}
                </p>
                <div className='flex items-center mt-2'>
                  <button className='border rounded px-2 py-1 text-xl font-medium text-black'>-</button>
                  <span className="mx-4 text-black">{product.quantity}</span>
                   <button className='border rounded px-2 py-1 text-xl font-medium text-black'>+</button>
                </div>
              
              </div>
                 <div>
                <p className='text-black'>${product.price.toLocaleString()}</p>
                <button className=''>
                  <RiDeleteBin3Line className='h-6 w-6 mt-2 text-red-600'/>
                </button>
              </div>
             
            </div>
            
          </div>
          
        ))
      }
    </div>
  )
}

export default CartContents