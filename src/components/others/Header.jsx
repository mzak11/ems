import React, { useState, useEffect } from 'react';
import Login from '../Auth/Login';

const Header = ({ data, changeUser }) => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  // Function to handle user logout
  const logOutUser = () => {
    localStorage.removeItem("loggedInUser"); // Remove user data from localStorage
    changeUser(""); // Reset user state
    setIsLoggedOut(true); // Trigger login component rendering
  };

  // If logged out, show the Login component
  if (isLoggedOut) {
    return <Login />;
  }

  // Show the logged-in user's name based on role
  const getUserName = () => {
    if (data && data.role === 'admin') {
      return 'Admin';
      console.log(data)
    } else if ( data) {
      return data.fname; // Assuming each employee has a "name" field
    }
    return 'Guest'; // Default fallback
  };

  return (
    <div className='flex items-center justify-between p-6 bg-white shadow-md rounded-xl'>
      <div className='flex flex-row items-center justify-center gap-2'>
        <h1 className='text-lg text-gray-500'>Welcome Back,</h1>
        <span className='font-medium text-2xl text-gray-700'>{getUserName()} 👋</span>
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
