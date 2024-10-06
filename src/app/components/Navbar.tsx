import React from 'react'
import Logo from './Logo';
import NavItem from './NavItem';


const navbarItems = [
    {label: 'Acceuil', link: '/'},
    {label: 'Produits', link: '/offers'},
    {label: 'Commerçants', link: '/vendors'},
    {label: 'About us', link: '/about'}
];

const Navbar = () => {

  return (
    <header className='flex justify-between items-center mt-8 mb-20'>
        <Logo path='/home'/>
        <nav>
            <ul className='flex justify-between gap-x-14'>
            {
                navbarItems.map(navbarItem => (
                    <li key={navbarItem.link}>
                        <NavItem link={navbarItem.link} label={navbarItem.label}  />
                    </li>
                ))
            }  
            </ul> 
        </nav>
        <button className='px-9 py-[.65rem] bg-[#003E1A] hover:bg-black text-white rounded-md font-semibold text-base'>Sign Up</button>
    </header>

  )
}

export default Navbar;
