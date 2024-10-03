import React from 'react'
import LinkUnderline from './LinkUnderline';

const NavItem : React.FC<{link: string, label: string}> = ({label, link}) => {
  
  return (
      <a 
        href={link} 
        className='uppercase font-bold text-sm tracking-wide group'
      >
        {label}
        <LinkUnderline link={link}/>
      </a>

  )
} 

export default NavItem;
