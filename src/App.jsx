import React, { useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    console.log(email, password);
    if(email == "admin@me.com" && password=="123"){
      console.log("This is admin")
    }else if(email == "user@me.com" && password=="123"){
        console.log("This is User")
    }
    else{
      alert("invalid Credentials")
    }
  };
  return (
    <>
      {!user ? <Login  handleLogin={handleLogin} /> : ""}  
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;
