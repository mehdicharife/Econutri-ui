import React from 'react'

const FilterIcon : React.FC<{width: string, height: string, color: string}>  = ({width, height, color}) => {
  return (
        <svg 
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height} 
            viewBox={`0 0 ${width} ${height}`} 
            fill={color} 
            stroke='none' 
            stroke-width='2' 
            strokeLinecap='round' 
            strokeLinejoin='round' 
            className='feather feather-filter'>
            
            <polygon points='22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3'></polygon>
            
        </svg>
  )
}

export default FilterIcon
