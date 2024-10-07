import Image from 'next/image'
import React from 'react'

export interface Product {
  id: number,
  name: string,
  image: string
};

export interface Offer {
    id: number,
    product: Product,
    unitPrice: number,
    availableQuantity: number

};



const OfferCard : React.FC<{offer: Offer}> = ({ offer }) => {
  
  return (
    <div className='p-3 border-solid border-2 border-lime-950 w-full flex flex-col items-center h-full rounded-md justify-center'>
        <div className='h-3/4 relative w-full mb-3'>
          <Image 
            src={process.env.API + "/" + offer.product.image} 
            alt='' 
            fill 
            objectFit='cover'
          />
        </div>
        
        <p className='block mb-1 font-semibold'>{offer.product.name}</p>
        <p className='block font-bold'>{offer.unitPrice + ' MAD'}</p>
    </div>  
  )
}

export default OfferCard;
