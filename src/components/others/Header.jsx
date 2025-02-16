import React, { useState } from 'react';

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
    <div className='flex items-center justify-between p-6 bg-white shadow-md rounded-xl'>
    <div className='flex flex-row items-center justify-center gap-2'>
      <h1 className='text-lg text-gray-500'>Welcome Back,</h1>
      <span className='font-medium text-2xl text-gray-700'>Username 👋</span>
    </div>
    <button 
      onClick={logOutUser} 
      className='bg-red-500 text-white py-2 px-5 text-sm rounded-xl hover:bg-red-700 transition'>
      Log Out
    </button>
  </div>
);
};

export default Header;
