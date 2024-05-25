import React from 'react';
import ProductCard from './ProductCard';

export default function ProductTemplate({title,products}) {
  return (
    <div className='bg-[#fdf8f4]'>
      <div className='flex flex-col justify-center items-center text-[#0C1D37] gap-14 py-10 text-center px-5'>
        <h1 className='text-5xl font-semibold'>{title} for <span className='text-[#c9313b] bg-[#f7cccb] px-2 rounded-xl'>Hire</span></h1>
        <p className="">Our rental prices <span className='font-bold'>include GST</span>. Discounts apply <span className='font-bold'>instantly</span> for each additional day you hire. <span className='font-bold'>Save more</span> the longer you rent!</p>
      </div>

      <div className='flex flex-wrap gap-14 justify-center items-center w-full px-8 gap-y-16 py-14'>
        {
            products.map((product) => (
              <ProductCard product = {product}/>  
            ))
        }
      </div>
    </div>
  )
}
