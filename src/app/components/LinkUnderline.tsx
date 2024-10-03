'use client'

import { usePathname } from 'next/navigation';
import React from 'react';



const LinkUnderline :React.FC<{link: string}> = ({link}) => {
    const pathname = usePathname();

    return (
        <hr className={
                (link == pathname ? 'w-full' : 'w-0')  +
                ' bg-[#003E1A] h-[3.5px] group-hover:w-full ' + 
                'transition-[width] ease-in-out duration-300 '
            } 
        />
    )
}

export default LinkUnderline
