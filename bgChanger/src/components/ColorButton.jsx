import React from 'react'

/**
* @author Neeraj Singh
* @function ColorButton
**/

export const ColorButton = ({color = 'Red', setColor}) => {
  return(
    <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl' style={{backgroundColor:'skyblue'}}>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
        style={{backgroundColor:color}}
        onClick={()=> setColor(color)}
        >
            {color}
        </button>
    </div>
   )
  }
