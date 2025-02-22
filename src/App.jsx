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

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    console.log("Checking localStorage:", loggedInUser); // ✅ Debugging

    if (loggedInUser) {
      const authData = JSON.parse(loggedInUser);
      setUser(authData.role);
      setLoggedInUserData(authData.user || null);
    }
  }, []); // ✅ Only run once on mount

  const handleLogin = (email, password) => {
    console.log("Attempting login with:", email, password);

    // Check if Admin
    if (email === "admin@me.com" && password === "123") {
      const adminData = { role: "admin", email };
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
      console.log("Admin Login Successful:", adminData);
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
      const employeeData = { role: "employee", user: employee };
      localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
      console.log("Employee Login Successful:", employeeData);
      setLoggedInUserData(employee);
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard />
      ) : user === "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
