import React, { ReactNode } from 'react'

const Container : React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div className='w-10/12  max-w-[1650px] mx-auto'>
      {children}
    </div>
  )
}
    
export default Container;
