import Image from 'next/image';
import React from 'react'

import logo from '../../../public/images/logo.svg'

const Logo : React.FC<{path: string}> = ({path}) => {
  return (
    <a href={path} className='flex justify-between items-center gap-4'>
        <Image src={logo} width='120' alt='Éconutri'/>
    </a>
  )
}

export default Logo;
