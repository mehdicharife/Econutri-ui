import { Offer } from '@/app/components/OfferCard';
import Image from 'next/image';
import React from 'react'

const OfferDetailsPage = async ({params} : {params: {id: string}}) => {

  const offer : Offer = await (await fetch(process.env.API + "/offers/" + params.id)).json();

  return (
    <div className='flex justify-center'>
      <div className=' sm:w-4/5 lg:w-1/2 max-w-[530px] min-w-[350px]'>

        <h1 className='text-6xl text-green-900 font-semibold text-center mb-4'>{offer.product.name}</h1>

        <div className='flex justify-between mb-8' id="offer-details">
          <p className='font-semibold text-base'>{offer.availableQuantity + " en stock"}</p>
          <p className='font-semibold text-base'>{offer.unitPrice + " MAD"}</p>
        </div>
        
        <div className='w-full pb-[105%] h-0 relative mb-14'>
          <Image src={process.env.API + "/" + offer.product.image} alt='' fill objectFit='cover' className='rounded-lg'/>
        </div>

        <button className='flex justify-between items-center py-4 bg-green-900 w-full rounded-lg hover:bg-green-950'>
          <p className='text-white font-semibold uppercase tracking-widest text-center w-full text-lg'>Commander</p>
        </button> 
        

      </div>
    </div>
  )
}

export default OfferDetailsPage;
