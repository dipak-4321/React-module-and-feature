import React from 'react'
import Left from './Left'
import Right from './Right'

const Page1content = (props) => {
  return (
    <div className='flex h-screen w-full gap-8 pt-4 '>
        <Left />
        <Right users={props.users} />
    </div>
  )
}

export default Page1content