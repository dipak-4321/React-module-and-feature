import React from 'react'
import { ArrowRight } from 'lucide-react';
const Card = () => {
  return (

        <div className="flex shrink-0 text-black relative  object-cover h-full w-53 overflow-hidden rounded-4xl">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              
              <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col text-white justify-between'> 
                <div className="h-8 w-8 bg-white text-black p-1.5 rounded-full flex justify-center items-center">1</div>
                
                <div className='shadow-2xl'>
                  <p className='mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut doloribus dolore, quis exercitationem nece</p>
                  <div className='flex justify-between gap-1'>
                    <button className='bg-green-500 text-white pt-1 pb-1 px-4 rounded-2xl'>Underserved</button>
                    <div className='p-1 bg-green-400 rounded-full  '>  <ArrowRight /></div>
                  </div>

                </div>

              </div>
        </div>

    
  )
}

export default Card