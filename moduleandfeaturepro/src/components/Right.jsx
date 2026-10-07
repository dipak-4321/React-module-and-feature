import React from 'react'
import Card from './Card'

const Right = (props) => {
  
  return (
    <div className='flex gap-4 h-full w-2/3  pb-8 pt-6'>
        {props.users.map((elem,idx)=>{
          return ( <Card idx={idx} img={elem.img} color = {elem.color}/>
          )
        })}

    </div>
  )
}

export default Right