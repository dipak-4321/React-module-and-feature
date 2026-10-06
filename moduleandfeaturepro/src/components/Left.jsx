import React from 'react'
import { ArrowUpRight } from 'lucide-react';
const Left = () => {
  return (
    <div className=' h-full w-1/3 pt-14 flex flex-col justify-between'>
        <div className='px-8 '>
        <p className='text-5xl font-medium  mb-6'>Prospective <br />customer <br />segmentation </p>
        <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo culpa quo, iure enim veritatis vitae impedit exercitationem totam quisquam mollitia ipsa reprehenderit, tempore voluptatem ratione a sun</p>
        </div>
        <div className=''><ArrowUpRight size={100} strokeWidth={1.5} /></div>
    </div>
    
  )
}

export default Left