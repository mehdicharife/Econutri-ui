import React from 'react'
import ProductCard from '../components/ProductCard';
import { Product } from '../components/ProductCard';


const products: Product[] = [
  {
    name: 'Dattes aux noix',
    image: '/images/products/dates-walnuts.png',
    unitPrice: 1.99
  },
  {
    name: 'Saumon au beurre',
    image: '/images/products/butter-salmon.webp',
    unitPrice: 2.49
  },
  {
    name: 'Sachet de Dorritos',
    image: '/images/products/doritos.jpg',
    unitPrice: 3.49
  },
  {
    name: 'Sachet de M&M',
    image: '/images/products/m&m.jpg',
    unitPrice: 4.99
  },
  {
    name: 'Chips de cornichon',
    image: '/images/products/pickle-chips.jpg',
    unitPrice: 2.99
  },

  {
    name: 'Sauce tomate',
    image: '/images/products/tomato-soup.jpg',
    unitPrice: 2.99
  } 
];


const ProductsPage = () => {


  return (
    <div>
      <header className='flex flex-col items-center gap-y-0 mb-16'>
        <h1 className='text-lime-950 text-[75px] font-medium '>Produits</h1>
        <p className='text-md font-medium'>Des milliers de produits alimentaires publiés chaque jour à prix très réduits</p>
      </header>

      <section className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6'>
        {
          products.map(product => (
            <div key={product.name} className='h-72 flex-[0_0_18%]'>
              <ProductCard product={product}/ >
            </div>
            
          ))  
        }
      </section>

    </div>
  )
}

export default ProductsPage;
