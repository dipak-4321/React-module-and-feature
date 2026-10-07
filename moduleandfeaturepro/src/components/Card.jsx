import React from 'react'
import { ArrowRight } from 'lucide-react';
const Card = (props) => {
   console.log(props)
  return (

        <div className="flex shrink-0 text-black relative  object-cover h-full w-53 overflow-hidden rounded-4xl">
            <img src={props.img} alt="" />
              
              <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col text-white justify-between'> 

                <div className="h-8 w-8 bg-white text-black p-1.5 rounded-full flex justify-center items-center">{props.idx+1}</div>
                
                <div className='shadow-2xl'>
                  <p className='mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut doloribus dolore, quis exercitationem nece</p>
                  <div className='flex justify-between gap-1'>
                    <button style={{
                      backgroundColor : props.color
                    }}  className='bg-green-500 text-white pt-1 pb-1 px-4 rounded-2xl'>Underserved</button>
                    <div className='p-1  rounded-full bg-amber-400 '>  <ArrowRight /></div>
                  </div>

                </div>

              </div>
        </div>

    
  )
}

export default Card