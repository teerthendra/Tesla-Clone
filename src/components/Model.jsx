import React from 'react'
import { FiChevronDown } from 'react-icons/fi';
function Model() {
  return (
    <>
    <div>
      <div className='absolute inset-x-0 top-[20%] text-center'>
        <h2 className='text-white text-4xl font-bold' > Model 3</h2>
      <p className='text-white p-2 text-sm'>Orden Online for <span className=' inline-block border-b-2 border-white mb-2 color-[white] '>Touchless Delivery</span> </p>
      </div>

      <div className='flex flex-col items-center justify-center md:flex-row absolute inset-x-0 bottom-[8%] gap-[100px] '>
<button className='text-white bg-black/70 rounded-lg p-2  '>Custom Order</button>
<button className='text-black bg-white/70 rounded-lg p-2 '>Existing Delivery</button>
      </div>
    
    <div className='flex flex-col items-center justify-center md:flex-row absolute inset-x-0 bottom-0' >
        <FiChevronDown className='text-black text-4xl transition duration-500 animate-bounce'></FiChevronDown>
    </div>
    </div>
    </>
  )
}

export default Model