import React, { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(()=>{
    // setLocalStorage()
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const authData = JSON.parse(loggedInUser)
      setUser(authData.role)
      setLoggedInUserData(authData.data)
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    console.log("Attempting login with:", email, password);
  
    // Check if Admin
    if (email === "admin@me.com" && password === "123") {
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      setUser("admin");
      return;
    }
  
    // Ensure authData is valid and contains employees
    if (!authData || !authData.employees) {
      console.error("authData is missing or does not contain employees.");
      alert("Invalid Credentials");
      return;
    }
  
    // Find employee in the list
    const employee = authData.employees.find(
      (e) => e.email === email && e.password === password
    );
  
    if (employee) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", user: employee })
      );
      setLoggedInUserData(employee);
      setUser("employee");
      console.log("Login Successful:", employee);
    } else {
      alert("Invalid Credentials");
    }
  };
  

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : (user === "employee" ? <EmployeeDashboard data={loggedInUserData} /> : null)}

    </>
  );
};

export default App;
