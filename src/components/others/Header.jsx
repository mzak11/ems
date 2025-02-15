import React,{useState} from 'react'

const Header = () => {
  localStorage.clear()

const logOutUser =()=>{
  localStorage.setItem('loggedInUser','')
  window.location.reload()
}
  // const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('admin')
  // }else {
  //   setUsername(data.fname)
  // }
  return (
    <div className='flex items-end justify-between '>
      <h1 className='font-medium text-2xl'>Hello  <br /> <span className='font-semibold text-3xl'>username👋</span> </h1>
      <button onClick={logOutUser

      } className='bg-red-500 text-white p-2 outline-none rounded-2xl text-md '>Logged Out</button>
    </div>
  )
}

export default Header
