import React, { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    getLocalStorage();
    setLocalStorage();
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.user || null);
    }
  }, []); // ✅ Only run once on mount

  const handleLogin = (email, password) => {
    // Admin Login Check
    if (email === "admin@me.com" && password === "123") {
      const adminData = { role: "admin", email };
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
      setUser("admin");
      return;
    }

    // Employee Login Check
    if (userData) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        const employeeData = { role: "employee", user: employee };
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
        setLoggedInUserData(employee);
        setUser("employee");
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} data={{ role: "admin" }} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
