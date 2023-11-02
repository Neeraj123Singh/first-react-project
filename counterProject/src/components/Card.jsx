import React from 'react'

/**
* @author Neeraj Singh
* @function  Create a Card
**/

export const Card  = ({name = "Laptop", btnText = "View"}) => {

  return(
    <div className="w-[600px] rounded-md border mb-4 ">
    <img
      src="https://images.pexels.com/photos/5703527/pexels-photo-5703527.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt="Laptop"
      className="h-[200px] w-full rounded-md object-cover"
    />
    <div className="p-4">
      <h1 className="text-lg font-semibold">About {name}</h1>
      <p className="mt-3 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <button
        type="button"
        className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[20px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        {btnText}
      </button>
    </div>
  </div>
  
   )
  }
