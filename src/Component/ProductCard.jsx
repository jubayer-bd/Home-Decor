import React from 'react'
import { Link } from 'react-router'

const ProductCard = ({ product }) => {
  const { name, image, price, category, id } = product
  return (
    <div className='card bg-base-100 border border-gray-200 shadow-sm hover:scale-105 transition ease-in-out'>
      <figure className='h-48 overflow-hidden'>
        <img className='w-full object-cover' src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>

        <p>Category: {category}</p>
        <p>Price: ${price}</p>
        <div className='card-actions justify-end '>
          <Link to={`/products/${id}`} className= ' px-4 py-2 rounded-lg border border-blue-500 hover:bg-black hover:text-white'>
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard