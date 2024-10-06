import React from 'react'
import  { Offer } from '../components/OfferCard';
import searchIcon from '../../../public/images/search.svg';

import Image from 'next/image';
import FilterIcon from '../components/vectors/FilterIcon';
import OfferCard from '../components/OfferCard';



const OfferPage = async () => {

  const productsResponse = await fetch(process.env.API +  "/offers", {next: {revalidate: 650}});
  const products : Offer[] = await productsResponse.json();

  return (
    <div>

      {/*  Page Header */}
      <header className='flex flex-col items-center gap-y-0 mb-16'>
        <h1 className='text-green-900  text-[75px] font-semibold '>Produits</h1>
        <p className='text-md font-medium'>Des milliers de produits alimentaires publiés chaque jour à prix très réduits</p>
      </header>

      {/* Body */}
      <section >

          {/* Display Control Panel */}
          <div className='mb-16'>

            {/* searching*/}
            <div className='flex gap-x-5 border-solid border-green-900 border-2 p-2 mb-6  rounded-md'>
              <Image src={searchIcon} alt='' width='30'/>
              <input id='product-keyword' name='product-keyword'placeholder='Rechercher par...' className='w-full text-green-900 font-medium'/>
            </div>
            
            {/* sorting and filtering */}
            <div className='flex justify-between'>
              <div className='flex gap-x-3 items-center'>
                <div className='bg-green-950 py-3 px-4 rounded-md text-white font-medium'><p>25k produits</p></div>
                <button className='flex gap-x-3 items-center bg-[#00ff6a] px-4 py-3 rounded-md text-green-950'>
                  <FilterIcon width='20' height='20' color='#052e16'/>
                  <span className=' font-semibold'>Ajouter un filtre</span>
                </button>
              </div>
              <button className='bg-[#00ff6a] text-green-950 px-4 font-semibold rounded-md py-3'><span>Trier par</span></button>
            </div>

          </div>


          {/* Products Grid */}
          <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mb-11'>
            {
              products.map(offer => (
                <div key={offer.id} className='h-72 flex-[0_0_18%]'>
                  <OfferCard offer={offer}/ >
                </div>
                
              ))  
            }
          </div>

          {/* Pagination */}
          <div className='flex justify-center'>
            <div className='flex gap-x-4'>
              <button className='size-11 bg-[#00ff6a] rounded-full font-bold'>1</button>
              {
                Array.from({length: 5}, (_, i) => i + 2)
                  .map(number => (
                      <button 
                        key={number} 
                        className='size-11 border-solid border-green-900 border-2 rounded-full font-bold'
                      >
                        {number}
                      </button>
                  ))
              }
            </div>
          </div>


      </section>

    </div>
  )
}

export default OfferPage;
