import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between '>
      <h1 className='font-medium text-2xl'>Hello  <br /> <span className='font-semibold text-3xl'>Zakhwan👋</span> </h1>
      <button className='bg-red-500 text-white p-2 outline-none rounded-2xl text-md '>Logged Out</button>
    </div>
  )
}

export default Header
