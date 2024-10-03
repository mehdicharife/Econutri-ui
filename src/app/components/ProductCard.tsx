import Image from 'next/image'
import React from 'react'

export interface Product {
    name: string,
    image: string,
    unitPrice: number
};




const ProductCard : React.FC<{product: Product}> = ({ product }) => {
  return (
    <div className='p-3 border-solid border-2 border-lime-950 w-full flex flex-col items-center h-full rounded-md justify-center'>
        <div className='h-3/4 relative w-full mb-3'>
          <Image src={product.image} alt='' fill objectFit='cover'/>
        </div>
        
        <p className='block mb-1 font-semibold'>{product.name}</p>
        <p className='block font-bold'>{product.unitPrice + ' MAD'}</p>
    </div>  
  )
}

export default ProductCard;
