import React,{useState} from 'react'

const Header = (props) => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser"); // Remove user data from localStorage
    props.changeUser(""); // Reset user state
    setIsLoggedOut(true); // Trigger login component rendering
  };

  if (isLoggedOut) {
    return <Login />; // Render Login component after logout
  }
  return (
    <div className='flex items-end justify-between '>
      <h1 className='font-medium text-2xl'>Hello  <br /> <span className='font-semibold text-3xl'>username👋</span> </h1>
      <button onClick={logOutUser

      } className='bg-red-500 text-white p-2 outline-none rounded-2xl text-md '>Logged Out</button>
    </div>
  )
}

export default Header
